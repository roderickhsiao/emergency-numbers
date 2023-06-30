"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
// country code regex
var CC_REGEX = /^[a-z]{2}$/i;
// flag emoji use 2 regional indicator symbols, and each symbol is 2 chars
var FLAG_LENGTH = 4;
// offset between uppercase ascii and regional indicator symbols
var OFFSET = 127397;
/**
 * convert country code to corresponding flag emoji
 * @param {string} cc - country code string
 * @returns {string} flag emoji
 */
function countryCodeEmoji(cc) {
    if (!CC_REGEX.test(cc)) {
        var type = typeof cc;
        throw new TypeError("cc argument must be an ISO 3166-1 alpha-2 string, but got '".concat(type === 'string' ? cc : type, "' instead."));
    }
    var codePoints = __spreadArray([], cc.toUpperCase(), true).map(function (c) { return c.codePointAt() + OFFSET; });
    return String.fromCodePoint.apply(String, codePoints);
}
// Function to generate table rows
function createTableRow(countryCode, countryName, emergencyNumbers) {
    var row = document.createElement('tr');
    var flagCell = document.createElement('td');
    flagCell.innerHTML = countryCodeEmoji(countryCode);
    row.appendChild(flagCell);
    var codeCell = document.createElement('td');
    codeCell.textContent = countryCode;
    row.appendChild(codeCell);
    var nameCell = document.createElement('td');
    nameCell.textContent = countryName;
    row.appendChild(nameCell);
    var fireCell = document.createElement('td');
    fireCell.textContent = emergencyNumbers.fire;
    row.appendChild(fireCell);
    var policeCell = document.createElement('td');
    policeCell.textContent = emergencyNumbers.police;
    row.appendChild(policeCell);
    var ambulanceCell = document.createElement('td');
    ambulanceCell.textContent = emergencyNumbers.ambulance;
    row.appendChild(ambulanceCell);
    return row;
}
// Function to generate the table
function generateTable() {
    var table = document.createElement('table');
    table.className = 'table-auto mx-auto';
    var tableHeader = table.createTHead();
    var headerRow = tableHeader.insertRow();
    var headers = ['Flag', 'Country Code', 'Country Name', 'Fire', 'Police', 'Ambulance'];
    headers.forEach(function (headerText) {
        var headerCell = document.createElement('th');
        headerCell.className = 'px-4 py-2 bg-gray-200';
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });
    var tableBody = table.createTBody();
    var countries = (0, index_1.getSupportedCountries)();
    countries.forEach(function (countryCode) {
        var countryMetadata = (0, index_1.getEmergencyNumberByCountry)(countryCode);
        var countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode);
        var row = createTableRow(countryCode, countryName, countryMetadata);
        tableBody.appendChild(row);
    });
    return table;
}
// Display the table
function displayTable() {
    var _a;
    var emergencyNumbersTable = generateTable();
    alert(emergencyNumbersTable);
    (_a = document.getElementById('emergency-numbers')) === null || _a === void 0 ? void 0 : _a.appendChild(emergencyNumbersTable);
}
displayTable();
//# sourceMappingURL=script.js.map