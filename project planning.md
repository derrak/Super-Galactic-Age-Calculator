You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Normally, we want you to follow testing best practices, which includes committing your code and test once it is passing. However, for this project, we want you to follow a different commit workflow to demonstrate your understanding of the Red, Green, Refactor workflow. Make sure that you:

Commit each test after you have written it and before writing the corresponding method in your business logic. This is the Red phase.
Then, write the business logic that corresponds to the test, verify that your test passes, and then commit your code. This is the Green phase.
Refactor your code base and tests as necessary. At the end of your work session, verify that you have 100% coverage on all tests.

The business logic of your application should take a person's age in years and create a class that does the following:

Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
Returns their age in Venus years. (A Venus year is .62 Earth years.)
Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. The number of years lived past life expectancy should be a positive number.
Keep it simple! You do not have to use the JavaScript Date object to complete this prompt.

Objectives
Your code will be reviewed for the following objectives:

Business logic has 100% line coverage with Jest.
Each spec was committed before writing its corresponding code.
Project utilizes classes, a feature of ES6.
Dependencies are managed with npm.
webpack is used to lint, bundle, and process code.
Project is in a polished, portfolio-quality state.
The prompt’s required functionality and baseline project requirements are in place by the deadline.


* Commit each test after you have written it and before writing the corresponding method in your business logic. This is the Red phase.
* Then, write the business logic that corresponds to the test, verify that your test passes, and then commit your code. This is the Green phase.
* Refactor your code base and tests as necessary. At the end of your work session, verify that you have 100% coverage on all tests.


const ageEarthYears = 42;           
const lifeExpectancy = 70;

class SolarCalculator {
  mercuryYears(){
    const mercuryYears = ageEarthYears*.24;
    return mercuryYears;
  }
}

class LifeExpectancy {
  lifeLeft
}











Mercury
 Mercurian years 
  .24

Venus
 Venusian years
  .62

Earth
 Earth years
  1

Mars
 Martian years
  1.88

Jupiter
 Jovian years
  11.86
