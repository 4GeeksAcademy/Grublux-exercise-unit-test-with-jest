
// fromDollarToYen,
// fromEuroToDollar,
// fromYenToPound

// Import the function sum from the app.js file
//const {sum} = require('./app.js');

// Start your first test

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const {fromEuroToDollar} = require('./app.js');

    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected);
});

test("One Dollar should be 146.26 Yen", function() {
    // Import the function from app.js
    const {fromDollarToYen} = require('./app.js');

    const expected = 146.26;
    expect(fromDollarToYen(1)).toBe(expected);

})

test("One thousand Yen should be 5.56 GBP", function() {
    //Import the function from app.js
    const {fromYenToPound} = require('./app.js');

    const expected = 5.56;
    expect(fromYenToPound(1000)).toBe(expected);
})