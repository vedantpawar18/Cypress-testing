/// <reference types="Cypress" />


describe('checking counter application', () => {
  it('Check if counter application is present', () => {
    cy.visit('http://localhost:3000/');
    cy.get("h2").should("exist");
    cy.get(".addCounter").should("exist");
    cy.get(".reducerCounter").should("exist");
  })

  it('Should increment Counter', () => {
    cy.visit('http://localhost:3000/');
    cy.get("h2").should("have.text", "The count is 0");
    cy.get(".addCounter").click();
    cy.get("h2").should("have.text", "The count is 1");
  })

  it('Should increment Counter multipleTimes', () => {
    cy.visit('http://localhost:3000/');
    cy.get("h2").should("have.text", "The count is 0");
    cy.get(".addCounter").click();
    cy.get(".addCounter").click();
    cy.get(".addCounter").click();
    cy.get("h2").should("have.text", "The count is 3");
  })
})