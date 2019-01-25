const { get } = require('snekfetch')
    , xml2js = require('xml2js')
    , parser = new xml2js.Parser()
    , { promisify } = require('util')
    , parseXML = promisify(parser.parseString);
String.prototype.uprcase = function() {
    let split = this.replace('ABD', 'Amerikan').replace('I', 'ı').toLocaleLowerCase().split(' ');
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toLocaleUpperCase() + split[i].slice(1);
    }
    return split.join(' ');
};
class TCMB_DOVIZ {
    async DovizListesi() {
        const kurlar = await get('http://www.tcmb.gov.tr/kurlar/today.xml');
        if (!kurlar || !kurlar.body) throw new Error('tcmb-doviz> TCMB\'ye erişilemedi.');
        const res = await parseXML(kurlar.body);
        if (!res) throw new Error('tcmb-doviz> XML ayrıştırılırken bir hata oluştu.');
        let list = [];
        for (let i = 0; i < res["Tarih_Date"]["Currency"].length; i++) {
            if (res["Tarih_Date"]["Currency"][i]["$"]["Kod"] && res["Tarih_Date"]["Currency"][i]["$"]["Kod"] !== "XDR") {
                list.push({
                    isim: res["Tarih_Date"]["Currency"][i]["Isim"][0].uprcase(),
                    kod: res["Tarih_Date"]["Currency"][i]["$"]["Kod"],
                    alis: res["Tarih_Date"]["Currency"][i]["ForexBuying"][0],
                    satis: res["Tarih_Date"]["Currency"][i]["ForexSelling"][0]
                });
            }
        }
        return { tarih: res["Tarih_Date"]["$"]["Date"], kurlar: list};
    }
    async getKur(id) {
        let data = await this.DovizListesi();
        let res = data.kurlar[id];
        data.kurlar.forEach(kur => {
            if (id === kur.kod || id === kur.isim) res = kur;
        });
        if(res == null) return [];
        return res;
    }
    async guncelTarih(){
        let data = await this.DovizListesi();
        if (!data || !data.tarih) throw new Error('tcmb-doviz> Tarih alınırken bir hata oluştu.');
        return data.tarih + " 10:00-15:00";    
    }
    async kurlarArray(){
        let data = await this.DovizListesi();
        let json = {isimler: [], kodlar: [], alislar: [], satislar: []};
        data.kurlar.forEach(kur => {
            json.isimler.push(kur.isim);
            json.kodlar.push(kur.kod);
            json.alislar.push(kur.alis);
            json.satislar.push(kur.satis);
        });
        return json;
    }
     
}

module.exports = TCMB_DOVIZ;