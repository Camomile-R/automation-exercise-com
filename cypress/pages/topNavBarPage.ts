/// <reference types="Cypress" />
export default class TopNavBarPage {
  forceClickAndCheck = {
    button_Home() {
      cy.get('ul[class="nav navbar-nav"] a i[class*="fa-home"]').click({force:true}),
      cy.title().should("contain", "Automation Exercise");
    },
    button_Products() {
      cy.get('ul[class="nav navbar-nav"] a i[class="material-icons card_travel"]').click({force:true}),
      cy.title().should("contain", "Automation Exercise - All Products");
    },
    button_Cart() {
      cy.get('ul[class="nav navbar-nav"] a i[class="fa fa-shopping-cart"]').click({force:true}),
      cy.title().should("contain", "Automation Exercise - Checkout");
    },
    button_TestCases() {
      cy.get('li:nth-child(5) > a i[class="fa fa-list"]').click({force:true}),
      cy.title().should("contain", "Automation Practice Website for UI Testing - Test Cases");
    },
    button_ContactUs() {
      cy.get('ul[class="nav navbar-nav"] a i[class="fa fa-envelope"]').click({force:true}),
      cy.title().should("contain", "Automation Exercise - Contact Us");
    }
  }
}
