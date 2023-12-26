/// <reference types="Cypress" />

import newUserDataObj from '../fixtures/user';

const userData = new newUserDataObj();

describe("https://www.automationexercise.com/*", () => {
  beforeEach(() => {cy.openHomePage()});

  //Test Case 6: Contact Us Form
  it("Checks 'Contact Us' happy pass flow with correct user", () => {
    cy.clickMainMenuBtn('button_ContactUs');
    cy.locationShouldBe('contactUs');
    cy.submitContactUsForm(userData.validUser);
    cy.checkContactUsFormSubmitted();
  });

  //Test Case 7: Verify Test Cases Page
  it("Checks 'Test Cases' page at https://www.automationexercise.com/test_cases", () => {
    cy.clickMainMenuBtn('button_TestCases');
    cy.locationShouldBe('testCases')
    cy.verifyTestCasesPage();
  });

  //Test Case 8: Verify All Products and product detail page
  it("Checks 'All Products' page at https://www.automationexercise.com/products", () => {
    cy.clickMainMenuBtn('button_Products');
    cy.locationShouldBe('allProducts');
    cy.checkIfProductsListIsVisible();
    cy.pickTheTileOfProduct('1').click({force:true});
    cy.checkDetailedViewProductDataIsVisible();
  });

  //Test Case 10: Verify Subscription in home page
  it("Checks 'Subscribtion' at the footer", () => {
    cy.subscribeViaFooterWith(userData.invalidUser['userEmail']);
  });

  //Test Case 11: Verify Subscription in Cart page
  it("Checks 'Subscribtion' at the footer", () => {
    cy.clickMainMenuBtn('button_Cart');
    cy.locationShouldBe('viewCart');
    cy.subscribeViaFooterWith(userData.invalidUser['userEmail']);
  });
});