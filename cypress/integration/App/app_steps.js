import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';

// Given('I open the app', () => {
//   cy.visit(Cypress.env('base_url'));
//   cy.location('pathname').should('include', '/');
// });

// Then('I see the {string} page', (text) => {
//   cy.visit(`${Cypress.env('base_url')}/${text}`);
//   cy.location('pathname').should('include', '/dashboard')});

// And('I can see the {string} title', (text) => {
//   cy.xpath(`//*[text()="${text}"]`)
//   .should('have.length', 1);
//     // <p class="MuiTypography-root MuiTypography-body1"> Home </p>
// });

// And('I can see the {string} component', (text) => {
//   cy.xpath(`//*[text()="${text}"]`)
//   .should('have.length', 1);
//     // <p class="MuiTypography-root MuiTypography-body1"> Home </p>
// });