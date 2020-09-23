const config = require('../config').configuration;
module.exports = {
    calcultate
}

function calcultate(input) {
    console.log(input);
    let finalAmount = input.reduce((total, data, index, array) => {
        let prodValue = config.products[data.itemCategory];
        // calculate the data;
        if (prodValue['isNotTaxable']) {
            total += (data.price * data.quantity);
            console.log("afterCalculateTax ::: ", (data.price * data.quantity), "  ", data.itemCategory);
            console.log("data :", data.price, " ",  data.quantity);
            return total;
        }
        let taxPercent, totalProdAmount, afterCalculateTax;
        if (prodValue['isExceed']) {
            for (let i = 0; i< prodValue.tax.length; i++) {
                let prodTaxAmount = prodValue.tax[i].amount;
                if(prodTaxAmount >= data.price){
                    taxPercent = prodValue.tax[i].taxPercent;
                    break;
                }
                if(prodValue.tax[i].amount == -2){
                    taxPercent = prodValue.tax[i].taxPercent;
                    break;
                }
                taxPercent = prodValue.tax[i].taxPercent;
            }
        } else {
            taxPercent = prodValue.tax[0].taxPercent;
        }
        totalProdAmount = data.price * data.quantity;
        afterCalculateTax = totalProdAmount + (totalProdAmount * taxPercent / 100);
        console.log("afterCalculateTax ::: ", afterCalculateTax, "  ", data.itemCategory);
        total += afterCalculateTax;
        console.log("data :", data.price, " ",  data.quantity);
        return total;
    }, 0);
    console.log("total ::: ", finalAmount)
    return finalAmount;
}