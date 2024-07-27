# all-starwars-names

[![Build Status](https://img.shields.io/travis/com/ZikaZaki/starwars-names/main?label=Build&logo=travis-ci&logoColor=white)](https://app.travis-ci.com/ZikaZaki/starwars-names)

A simple npm library that provides a collection of all Star Wars character names and the ability to generate a random unique Star Wars name.

## Installation

To install the `all-starwars-names` library, use the following command:

```
npm install all-starwars-names
```

## Usage

1. **Get all Star Wars names**:

   ```javascript
   const { all } = require('all-starwars-names');
   console.log(all);
   ```

   This will return an array of all the Star Wars character names.

2. **Get a random unique Star Wars name**:

   ```javascript
   const { random } = require('all-starwars-names');
   console.log(random());
   ```

   This will return a single, unique Star Wars character name.

## API

The `all-starwars-names` library provides the following API:

1. **`all`**:
   - Description: Returns an array of all the Star Wars character names.
   - Usage: `const { all } = require('all-starwars-names'); console.log(all);`

2. **`random()`**:
   - Description: Returns a single, unique Star Wars character name.
   - Usage: `const { random } = require('all-starwars-names'); console.log(random());`

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/ZikaZaki/starwars-names).

## License

This project is licensed under the [MIT License](LICENSE).
