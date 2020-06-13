
# tcmb-doviz
#### Türkiye Cumhuriyet Merkez Bankası  -  Döviz

Türkiye Cumhuriyet Merkez Bankasını kullanarak dövizleri size haberdar eden bir npm modülü.

## Örnekler

```js
//Döviz Listesi
(async () => {
	const TCMB_Doviz = require('tcmb-doviz');
	const Doviz = new TCMB_Doviz();
	const res = await Doviz.DovizListesi();
	console.log(res);
})();
```

```js
//Döviz Bilgileri
(async () => {
	const TCMB_Doviz = require('tcmb-doviz');
	const Doviz = new TCMB_Doviz();
	const res = await Doviz.getKur("USD"); //buraya usd yerine listedeki sırasını da yazabilirsiniz örneğin Doviz.getKur(0)
	console.log(res);
})();
```

```js
//Dövizlerin Güncellendiği Tarihi
(async () => {
	const TCMB_Doviz = require('tcmb-doviz');
	const Doviz = new TCMB_Doviz();
	const res = await Doviz.guncelTarih();
	console.log(res);
})();
```
```js
//Döviz Liste (Array)
(async () => {
	const TCMB_Doviz = require('tcmb-doviz');
	const Doviz = new TCMB_Doviz();
	const res = await Doviz.kurlarArray();
	console.log(res);
})();
```
   
