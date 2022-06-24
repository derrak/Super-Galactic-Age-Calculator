import LifeExpect from './../src/js/lifeExpect.js';

describe('LifeExpect', () => {
  test('should create a lifeExpect object that calcs diff between earthLifeExpectYears and earthAgeYears', () => {
    const lifeExpectYearsCalc = new LifeExpect(42, 80);
    expect(lifeExpectYearsCalc.mercury).toEqual(9.12);
    expect(lifeExpectYearsCalc.venus).toEqual(23.56);
    expect(lifeExpectYearsCalc.mars).toEqual(71.44);
    expect(lifeExpectYearsCalc.jupiter).toEqual(450.68);
  });

  test('should correctly determine if earthLifeExpectYears > earthAgeYears', () => {
    const earthLifeExpectYears = 80;
    const earthAgeYears = 42;
    expect(lifeExpectOutput()).toEqual(true);
  });
})