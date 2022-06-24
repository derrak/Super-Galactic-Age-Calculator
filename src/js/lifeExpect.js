export default class LifeExpect{
  
  constructor(earthAgeYears, earthLifeExpectYears) {
    let lifeLeftYears = earthLifeExpectYears - earthAgeYears;
    this.mercury = parseFloat((lifeLeftYears * .24).toFixed(2));
    this.venus = parseFloat((lifeLeftYears * .62).toFixed(2));
    this.mars = parseFloat((lifeLeftYears * 1.88).toFixed(2));
    this.jupiter = parseFloat((lifeLeftYears * 11.86).toFixed(2));
    this.earthAge = parseFloat(earthAgeYears.toFixed(2));
    this.earthLifeExpect = parseFloat(earthLifeExpectYears.toFixed(2));
  }

  lifeExpectOutput() {
    if (this.earthAge > this.earthLifeExpect){
      return `Congrats! You should be dead! You've surpassed you life expectancy by the eqivilent of ${this.mercury*-1} Mercurian years, ${this.venus*-1} Venusian years, ${this.mars*-1} Martian years, or ${this.jupiter*-1} Jovian years!`;
      }
    else {
      return `Congrats! You're not dead yet! You've got the eqivilent of ${this.mercury} Mercurian years, ${this.venus} Venusian years, ${this.mars} Martian years, or ${this.jupiter} Jovian years left to live!`;
    }
  }

}
