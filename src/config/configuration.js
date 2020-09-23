const config = {
    products: {
        medicine: {
            tax: [{ taxPercent: 5, amount: -1 }],
            isExceed: false
        },
        food: {
            tax: [{ taxPercent: 5, amount: -1 }],
            isExceed: false
        },
        cloth: {
            tax: [{ taxPercent: 5, amount: 1000 }, { taxPercent: 12, amount: -2 }],
            isExceed: true
        },
        music: {
            tax: [{ taxPercent: 3, amount: -1 }],
            isExceed: false
        },
        book: {
            isExceed: false,
            isNotTaxable: true
        },
        imported:{
            isExceed: false,
            tax: [{ taxPercent: 18, amount: -1 }]
        }
    }
}

console.log("config check::", config)
module.exports = config;