import {
  getEmergencyNumberByCountry,
  getSupportedCountries,
} from '../dist/index';

// Function to generate table rows
function createTableRow(countryCode, countryName, emergencyNumbers) {
  const row = document.createElement('tr');

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
  table.className = 'table-auto mx-auto';

  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  const headers = [
    'Country Code',
    'Country Name',
    'Fire',
    'Police',
    'Ambulance',
  ];

  headers.forEach((headerText) => {
    const headerCell = document.createElement('th');
    headerCell.className = 'px-4 py-2 bg-gray-200';
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });

  const tableBody = table.createTBody();
  const countries = getSupportedCountries();

  countries.forEach((countryCode) => {
    const countryMetadata = getEmergencyNumberByCountry(countryCode);
    const countryName = countryCode; // Replace with actual country name retrieval logic

    const row = createTableRow(countryCode, countryName, countryMetadata);
    tableBody.appendChild(row);
  });

  return table;
}

// Display the table
const emergencyNumbersTable = generateTable();
document.getElementById('emergency-numbers').appendChild(emergencyNumbersTable);
