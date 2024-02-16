// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * oneEuroIs['USD'];
    //return the dollar value
    return valueInDollar;
};

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = (Math.round((valueInDollar/1.07)*oneEuroIs['JPY']* 100)/ 100);
    //return the Yen value
    return valueInYen;

};

const fromYenToPound = (valueInYen) => {
    let valueInPound = (Math.round((valueInYen/oneEuroIs['JPY'])*oneEuroIs['GBP']* 100)/ 100);
    //return the GBP value
    return valueInPound;
};



module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};