var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        return __awaiter(this, void 0, void 0, function () {
            var table, tableHeader, headerRow, headers, tableBody, countries, _i, countries_1, countryCode, countryMetadata, countryName, row;
            return __generator(this, function (_a) {
                table = document.createElement('table');
                table.className = 'table-auto mx-auto';
                tableHeader = table.createTHead();
                headerRow = tableHeader.insertRow();
                headers = ['Flag', 'Country Code', 'Country Name', 'Fire', 'Police', 'Ambulance'];
                headers.forEach(function (headerText) {
                    var headerCell = document.createElement('th');
                    headerCell.className = 'px-4 py-2 bg-gray-200';
                    headerCell.textContent = headerText;
                    headerRow.appendChild(headerCell);
                });
                tableBody = table.createTBody();
                countries = (0, index_1.getSupportedCountries)();
                for (_i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
                    countryCode = countries_1[_i];
                    countryMetadata = (0, index_1.getEmergencyNumberByCountry)(countryCode);
                    countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode);
                    row = createTableRow(countryCode, countryName, countryMetadata);
                    tableBody.appendChild(row);
                }
                return [2 /*return*/, table];
            });
        });
    }
    // Display the table
    function displayTable() {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var emergencyNumbersTable;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, generateTable()];
                    case 1:
                        emergencyNumbersTable = _b.sent();
                        (_a = document.getElementById('emergency-numbers')) === null || _a === void 0 ? void 0 : _a.appendChild(emergencyNumbersTable);
                        return [2 /*return*/];
                }
            });
        });
    }
    displayTable();
});
//# sourceMappingURL=script.js.map