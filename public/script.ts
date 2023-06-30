import { getEmergencyNumberByCountry, getSupportedCountries } from '../index.js';

// country code regex
const CC_REGEX = /^[a-z]{2}$/i;

// flag emoji use 2 regional indicator symbols, and each symbol is 2 chars
const FLAG_LENGTH = 4;

// offset between uppercase ascii and regional indicator symbols
const OFFSET = 127397;

/**
 * convert country code to corresponding flag emoji
 * @param {string} cc - country code string
 * @returns {string} flag emoji
 */
function countryCodeEmoji(cc) {
  if (!CC_REGEX.test(cc)) {
    const type = typeof cc;
    throw new TypeError(
      `cc argument must be an ISO 3166-1 alpha-2 string, but got '${
        type === 'string' ? cc : type
      }' instead.`,
    );
  }

  const codePoints = [...cc.toUpperCase()].map(c => c.codePointAt() + OFFSET);
  return String.fromCodePoint(...codePoints);
}

// Function to generate table rows
function createTableRow(countryCode, countryName, emergencyNumbers) {
  const row = document.createElement('tr');

  const flagCell = document.createElement('td');
  flagCell.innerHTML = countryCodeEmoji(countryCode);
  row.appendChild(flagCell);

  const codeCell = document.createElement('td');
  codeCell.textContent = countryCode;
  row.appendChild(codeCell);

  const nameCell = document.createElement('td');
  nameCell.textContent = countryName;
  row.appendChild(nameCell);

  const fireCell = document.createElement('td');
  fireCell.textContent = emergencyNumbers.fire;
  row.appendChild(fireCell);

  const policeCell = document.createElement('td');
  policeCell.textContent = emergencyNumbers.police;
  row.appendChild(policeCell);

  const ambulanceCell = document.createElement('td');
  ambulanceCell.textContent = emergencyNumbers.ambulance;
  row.appendChild(ambulanceCell);

  return row;
}

// Function to generate the table
function generateTable() {
  const table = document.createElement('table');
  table.className = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';

  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  tableHeader.className = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0';
  const headers = ['Flag', 'Country Code', 'Country Name', 'Fire', 'Police', 'Ambulance'];

  headers.forEach((headerText) => {
    const headerCell = document.createElement('th');
    headerCell.className = 'px-6 py-3';
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  const tableBody = table.createTBody();
  const countries = getSupportedCountries();

  countries.forEach((countryCode) => {
    const countryMetadata = getEmergencyNumberByCountry(countryCode);
    const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode);

    const row = createTableRow(countryCode, countryName, countryMetadata);
    tableBody.appendChild(row);
  });

  return table;
}

// Display the table
function displayTable() {
  const emergencyNumbersTable = generateTable();
  document.getElementById('emergency-numbers')?.appendChild(emergencyNumbersTable);
}

displayTable();
