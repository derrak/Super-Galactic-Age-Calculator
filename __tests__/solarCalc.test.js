import solarCalc from './../src/solarCalculator.js';

describe('SolarCalc', () => {
  test('should correctly create a solarYearsCalc object with one calc', () => {
    const solarYearsCalc = new solarCalc(42);
    expect(solarYearsCalc.mercury).toEqual(10.08)
  });
});

