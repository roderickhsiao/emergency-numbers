# Emergency Numbers

This library provides a convenient way to retrieve emergency contact numbers for different countries. It includes default emergency numbers as well as the ability to retrieve country-specific emergency numbers.


## Installation

You can install this library using your preferred package manager:

| Package Manager | Command |
| --------------- | ------- |
| npm             | `npm install emergency-numbers` |
| Yarn            | `yarn add emergency-numbers` |
| pnpm            | `pnpm add emergency-numbers` |

Choose the appropriate command based on the package manager you have installed in your project. Make sure to run the command in the root directory of your project.


## Usage

### Importing the Library

```javascript
import {
  getEmergencyNumberByCountry,
  getEmergencyNumberByCountryAndType,
  getSupportedCountries
} from 'emergency-numbers';

import { NumberType } from 'emergency-numbers/constants';
```

### Retrieving Emergency Numbers

To retrieve the emergency numbers for a specific country, use the `getEmergencyNumberByCountry` function:

```javascript
const countryCode = 'US'; // ISO Alpha-2
const emergencyNumbers = getEmergencyNumberByCountry(countryCode);

console.log(emergencyNumbers);
// Output: { fire: 911, police: 911, ambulance: 911 }
```

To retrieve a specific type of emergency number for a country, use the `getEmergencyNumberByCountryAndType` function:

```javascript
const countryCode = 'GB';
const numberType = NumberType.POLICE;
const emergencyNumber = getEmergencyNumberByCountryAndType(countryCode, numberType);

console.log(emergencyNumber);
// Output: 999
```

### Retrieving Supported Countries

To get a list of supported countries for which emergency numbers are available, use the `getSupportedCountries` function:

```javascript
const countries = getSupportedCountries();

console.log(countries);
// Output: ['US', 'GB', ...]
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This library is released under the [MIT License](https://opensource.org/licenses/MIT).