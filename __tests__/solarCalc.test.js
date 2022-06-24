import SolarCalc from './../src/js/solarCalc.js';

describe('SolarCalc', () => {
  test('should correctly create a solarYearsCalc object with one calc', () => {
    const solarYearsCalc = new SolarCalc(42);
    expect(solarYearsCalc.mercury).toEqual(10.08)
  });

  test('should correctly create a solarYearsCalc object with multiple year calcs', () => {
    const solarYearsCalc = new SolarCalc(42);
    expect(solarYearsCalc.mercury).toEqual(10.08)
    expect(solarYearsCalc.venus).toEqual(26.04)
    expect(solarYearsCalc.mars).toEqual(78.96)
    expect(solarYearsCalc.jupiter).toEqual(498.12)
  });

  });

