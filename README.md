![tcmb-doviz](https://i.imgur.com/829wnb3.png)
**tcmb-doviz** is used only to display the exchange rates of the Central Bank of Turkey.
[![npm version](https://badge.fury.io/js/tcmb-doviz.svg)](https://badge.fury.io/js/tcmb-doviz) ![npm](https://img.shields.io/npm/dm/tcmb-doviz)
## Installation
```bash
# installation via npm
npm install tcmb-doviz

# installation via yarn
yarn add tcmb-doviz
```
## Examples
```js
const tcmbdoviz = require('./lib/main');

const data = await tcmbdoviz.getData() // Get All Data
console.log(data)
/* Output: {date: '05/11/2021 15:30 (GMT+3)', exchanges: [
	{
		name: 'ABD DOLARI',
		code: 'USD',
		buying: 8.2867,
		selling: 8.3016
	},
	{ name: 'EURO', code: 'EUR', buying: 10.0727, selling: 10.0909 }, ...
]} */

const exchangeRate = await tcmbdoviz.getExchangeRate('USD')
console.log(exchangeRate)
/* Output: {
	name: 'ABD DOLARI',
	code: 'USD',
	buying: 8.2867,
	selling: 8.3016
} */

const exchangeRates = await tcmbdoviz.getExchangeRates() // Get Exchanges Rates
console.log(exchangeRates)
/* Output: [
	{
		name: 'ABD DOLARI',
		code: 'USD',
		buying: 8.2867,
		selling: 8.3016
	},
	{ name: 'EURO', code: 'EUR', buying: 10.0727, selling: 10.0909 }, ...
] */
```

## License
The content of this project itself is licensed under the Creative Commons Attribution 3.0 Unported license, and the underlying source code used to format and display that content is licensed under the MIT license.