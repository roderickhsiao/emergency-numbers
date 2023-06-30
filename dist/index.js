"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSupportedCountries = exports.getEmergencyNumberByCountryAndType = exports.getEmergencyNumberByCountry = void 0;
var metadata_1 = __importDefault(require("./metadata"));
var constants_1 = require("./constants");
__exportStar(require("./constants"), exports);
// https://travel.stackexchange.com/questions/149032/call-local-emergency-number-using-a-foreign-mobile-number
// 112 Should work in most countries, but not all.
var DEFAULT_NUMBER = 112;
var DEFAULT_SETTINGS = (_a = {},
    _a[constants_1.NumberType.FIRE] = DEFAULT_NUMBER,
    _a[constants_1.NumberType.AMBULANCE] = DEFAULT_NUMBER,
    _a[constants_1.NumberType.POLICE] = DEFAULT_NUMBER,
    _a);
var getEmergencyNumberByCountry = function (countryCode) {
    var countryMetadata = metadata_1.default[countryCode];
    return __assign(__assign({}, DEFAULT_SETTINGS), countryMetadata);
};
exports.getEmergencyNumberByCountry = getEmergencyNumberByCountry;
var getEmergencyNumberByCountryAndType = function (countryCode, type) {
    var result = (0, exports.getEmergencyNumberByCountry)(countryCode);
    return result[type];
};
exports.getEmergencyNumberByCountryAndType = getEmergencyNumberByCountryAndType;
var getSupportedCountries = function () { return Object.keys(metadata_1.default); };
exports.getSupportedCountries = getSupportedCountries;
//# sourceMappingURL=index.js.map