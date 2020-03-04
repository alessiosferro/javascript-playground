/* eslint-disable */

describe("pow", function () {
  // before(() => console.log("Starting tests..."));
  // after(() => console.log("Tests ended"));

  // beforeEach(() => console.log("Starting the test"));
  // afterEach(() => console.log("Test finished"));

  it("for negative n the result is NaN", () => assert.isNaN(pow(2, -1)));
  it("for non-integer n the result is NaN", () => assert.isNaN(pow(2, 1.5)));

  describe("raises x to power 3", function () {
    function makeTest(x) {
      const expected = x * x * x;
      it(`${x} raised to power 3 is ${expected}`, () => assert.equal(pow(x, 3), expected));
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  })
});