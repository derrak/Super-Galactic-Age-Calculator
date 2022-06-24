export default class SolarCalc{
  constructor(earthAgeYears) {
    this.mercury = earthAgeYears * .24;
    this.venus = earthAgeYears * .62;
    this.mars = earthAgeYears * 1.88;
    this.jupiter = earthAgeYears * 11.86;
  }
  
  yearOutput() {
    let outputString = `Your age in Mercurian years is ${this.mercury}, in Venusian years is ${this.venus}, in Martian years is ${this.mars} and ${this.jupiter} in Jovian years`
    return outputString;
  }  

  // yearMap() {
  //   let yearMap = new Map(Object.entries);
  //   return yearMap;
  // }


}
   