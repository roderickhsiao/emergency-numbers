import {
  getEmergencyNumberByCountry,
  getEmergencyNumberByCountryAndType,
} from '.';
import { NumberType } from './constants';

describe('getEmergencyNumberByCountry', () => {
  it('should return default emergency numbers when country metadata is not available', () => {
    const countryCode = 'ZZ'; // Invalid country code
    const result = getEmergencyNumberByCountry(countryCode);

    expect(result).toEqual({
      [NumberType.FIRE]: 112,
      [NumberType.AMBULANCE]: 112,
      [NumberType.POLICE]: 112,
    });
  });

  it('should return correct number - US', () => {
    const countryCode = 'US'; // Country with available metadata
    const result = getEmergencyNumberByCountry(countryCode);

    const expected = {
      [NumberType.FIRE]: 911,
      [NumberType.AMBULANCE]: 911,
      [NumberType.POLICE]: 911,
    };

    expect(result).toEqual(expected);
  });

  it('should return correct number', () => {
    const countryCode = 'TW'; // Country with available metadata
    const result = getEmergencyNumberByCountry(countryCode);

    const expected = {
      [NumberType.FIRE]: 119,
      [NumberType.AMBULANCE]: 119,
      [NumberType.POLICE]: 110,
    };

    expect(result).toEqual(expected);
  });
});

describe('getEmergencyNumberByCountryAndType', () => {
  it('should return default emergency numbers when country metadata is not available', () => {
    const countryCode = 'ZZ'; // Invalid country code
    const result = getEmergencyNumberByCountryAndType(
      countryCode,
      NumberType.FIRE
    );

    expect(result).toEqual(112);
  });

  it('should return correct number - US', () => {
    const countryCode = 'US'; // Country with available metadata
    const result = getEmergencyNumberByCountryAndType(
      countryCode,
      NumberType.POLICE
    );

    const expected = 911;

    expect(result).toEqual(expected);
  });

  it('should return correct number', () => {
    const countryCode = 'TW'; // Country with available metadata
    const result = getEmergencyNumberByCountryAndType(
      countryCode,
      NumberType.POLICE
    );

    const expected = 110;

    expect(result).toEqual(expected);
  });
});
