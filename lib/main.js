const fetch = require("node-fetch")
const { parseString } = require('xml2js')
const parseXML = require('util').promisify(parseString)

module.exports = {

    async getData() {
        const data = await fetch('http://www.tcmb.gov.tr/kurlar/today.xml')
            .then((res) => res.text())
            .catch(() => null)
        if (!data) throw 'Error while on TCMB request.'

        const tcmb = await parseXML(data).catch(() => null)
        if (!tcmb) throw 'Error while on XML parsing.'

        const exchanges = [];
        for (const e of tcmb.Tarih_Date.Currency.filter((e) => e.$.Kod && e.$.Kod !== 'XDR')) {
            exchanges.push({
                name: e.Isim[0],
                code: e.$.Kod,
                buying: Number(e.ForexBuying[0]),
                selling: Number(e.ForexSelling[0])
            });
        }

        return { date: `${tcmb.Tarih_Date.$.Date} 15:30 (GMT+3)`, exchanges }
    },

    async getUpdatedDate() {
        const data = await this.getData()
        return data.date
    },

    async getExchangeRate(id) {
        const data = await this.getData()
        return data.exchanges[id] ? data.exchanges[id] : data.exchanges.find((e) => id === e.code || id === e.name)
    },

    async getExchangeRates() {
        const data = await this.getData()
        return data.exchanges
    }
}