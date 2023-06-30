(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "country-code-emoji", "../index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var country_code_emoji_1 = require("country-code-emoji");
    var index_1 = require("../index");
    // Function to generate table rows
    function createTableRow(countryCode, countryName, emergencyNumbers) {
        var row = document.createElement('tr');
        var flagCell = document.createElement('td');
        flagCell.innerHTML = (0, country_code_emoji_1.countryCodeEmoji)(countryCode);
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
        (_a = document.getElementById('emergency-numbers')) === null || _a === void 0 ? void 0 : _a.appendChild(emergencyNumbersTable);
    }
    displayTable();
});
//# sourceMappingURL=script.js.map