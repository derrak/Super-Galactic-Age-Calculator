import LifeExpect from './../src/js/lifeExpect.js';

describe('LifeExpect', () => {
  test('should create a lifeExpect object that calcs diff between earthLifeExpectYears and earthAgeYears', () => {
    const lifeExpectYearsCalc = new LifeExpect(80, 70);
    expect(lifeExpectYearsCalc.mercury).toEqual(9.12);
    expect(lifeExpectYearsCalc.venus).toEqual(23.56);
    expect(lifeExpectYearsCalc.mars).toEqual(71.44);
    expect(lifeExpectYearsCalc.jupiter).toEqual(450.68);
  });

  //This test passed, then I changed the output, so it wouldnt' pass anymore
  // test('should correctly determine if earthLifeExpectYears > earthAgeYears', () => {
  //   const lifeExpectYearsCalc = new LifeExpect(90, 80);
  //   expect(lifeExpectYearsCalc.lifeExpectOutput()).toBe(true);
  // });

  test('should correctly determine if earthLifeExpectYears > earthAgeYears', () => {
    const lifeExpectYearsCalc = new LifeExpect(90, 80);
    expect(lifeExpectYearsCalc.lifeExpectOutput()).toEqual("Congrats! You should be dead! You've surpassed you life expectancy b the eqivilent of 2.4 Mercurian years, 6.2 Venusian years, 18.8 Martian years, or 118.6 Jovian years!");
  });
});