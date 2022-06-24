import SolarCalc from './../src/js/solarCalc.js';

describe('SolarCalc', () => {
  test('should correctly create a solarYearsCalc object with one calc', () => {
    const solarYearsCalc = new SolarCalc(42);
    expect(solarYearsCalc.mercury).toEqual(10.08)
  });
});

