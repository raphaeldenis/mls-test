import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the app', () => {
  cy.visit(Cypress.env('base_url'));
});

Then('I see the {string} page', text => {
  text === 'home'
    ? cy.url().should('eq', `${Cypress.env('base_url')}` + '/')
    : cy.url().should('eq', `${Cypress.env('base_url')}` + `/${text}`);
});

Given('I go to the {string} page', text => {
  cy.visit(`${Cypress.env('base_url')}/${text}`);
});

And('I can see the {string} title', text => {
  cy.xpath(`//*[text()="${text}"]`).should('have.length', 1);
});

And('I can see the {string} component', text => {
  cy.xpath(`//*[text()="${text}"]`).should('have.length', 1);
});
