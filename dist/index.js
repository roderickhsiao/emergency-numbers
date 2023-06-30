import metadata from './metadata.js';
import { NumberType } from './constants.js';
export * from './constants.js';
// https://travel.stackexchange.com/questions/149032/call-local-emergency-number-using-a-foreign-mobile-number
// 112 Should work in most countries, but not all.
const DEFAULT_NUMBER = 112;
const DEFAULT_SETTINGS = {
    [NumberType.FIRE]: DEFAULT_NUMBER,
    [NumberType.AMBULANCE]: DEFAULT_NUMBER,
    [NumberType.POLICE]: DEFAULT_NUMBER,
};
export const getEmergencyNumberByCountry = (countryCode) => {
    const countryMetadata = metadata[countryCode];
    return Object.assign(Object.assign({}, DEFAULT_SETTINGS), countryMetadata);
};
export const getEmergencyNumberByCountryAndType = (countryCode, type) => {
    const result = getEmergencyNumberByCountry(countryCode);
    return result[type];
};
export const getSupportedCountries = () => Object.keys(metadata);
//# sourceMappingURL=index.js.map