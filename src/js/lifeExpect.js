export default class LifeExpect{
  constructor(earthAgeYears, earthLifeExpectYears) {
    let lifeLeftYears = earthLifeExpectYears - earthAgeYears;
    this.mercury = parseFloat((lifeLeftYears * .24).toFixed(2));
    this.venus = parseFloat((lifeLeftYears * .62).toFixed(2));
    this.mars = parseFloat((lifeLeftYears * 1.88).toFixed(2));
    this.jupiter = parseFloat((lifeLeftYears * 11.86).toFixed(2));
  }
}
