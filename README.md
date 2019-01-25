# tcmb-doviz
#### Türkiye Cumhuriyet Merkez Bankası  -  Döviz

Türkiye Cumhuriyet Merkez Bankasını kullanarak dövizleri size haberdar eden bir npm modülü.

## Örnekler

>Bu örnekte nasıl **Döviz Listesini** alacağınız gösterilmiş.
    
	(async => {
		const TCMB_Doviz = require('tcmb-doviz');
		const Doviz = new TCMB_Doviz();
		const res = await Doviz.DovizListesi();
		console.log(res);
    })();
>Bu örnekte nasıl **Döviz Bilgilerini** alacağınız gösterilmiş.
    
	(async => {
		const TCMB_Doviz = require('tcmb-doviz');
		const Doviz = new TCMB_Doviz();
		const res = await Doviz.getKur("USD"); //buraya usd yerine listedeki sırasını da yazabilirsiniz örneğin 0
		console.log(res);
    })();
>Bu örnekte nasıl **Dövizlerin Güncellendiği Tarihi** alacağınız gösterilmiş.
    
	(async => {
		const TCMB_Doviz = require('tcmb-doviz');
		const Doviz = new TCMB_Doviz();
		const res = await Doviz.guncelTarih();
		console.log(res);
    })();