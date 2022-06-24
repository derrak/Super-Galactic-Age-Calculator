export default class SolarCalc{
  constructor(earthAgeYears) {
    this.mercury = earthAgeYears * .24;
    this.venus = earthAgeYears * .62;
    this.mars = earthAgeYears * 1.88;
    this.jupiter = earthAgeYears * 11.86;
  }
  
  yearOutput() {
    return "Your age in Mercurian years is: " + this.mercury;
  }  



}
   