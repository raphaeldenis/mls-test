import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';

const positionStringtoPositionNumber = {
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
  fifth: 4,
  sixth: 5,
  seventh: 6,
  eighth: 7,
  nineth: 8,
  tenth: 9,
};

And('I can see a list of {string}', text => {
  cy.get(`[data-test-id="${text}-card"]`).should($element => {
    expect($element).to.have.length(5);
  });
});

And('the {string} element title should be {string}', (index, cardname, text) => {
  cy.get(`[data-test-id=" ${cardname}-card"]`).should($element => {
    expect($element.eq(positionStringtoPositionNumber[index]), `${index} item`).to.contain(text);
  });
});
