import metadata from './metadata';

import { NumberType } from './constants';

export * from './constants';

// https://travel.stackexchange.com/questions/149032/call-local-emergency-number-using-a-foreign-mobile-number
// 112 Should work in most countries, but not all.
const DEFAULT_NUMBER = 112;

const DEFAULT_SETTINGS = {
  [NumberType.FIRE]: DEFAULT_NUMBER,
  [NumberType.AMBULANCE]: DEFAULT_NUMBER,
  [NumberType.POLICE]: DEFAULT_NUMBER,
};

export const getEmergencyNumberByCountry = (countryCode: string) => {
  const countryMetadata = metadata[countryCode];

  return { ...DEFAULT_SETTINGS, ...countryMetadata };
};

export const getEmergencyNumberByCountryAndType = (
  countryCode: string,
  type: NumberType
) => {
  const result = getEmergencyNumberByCountry(countryCode);
  return result[type];
};

export const getSupportedCountries = () => Object.keys(metadata);
