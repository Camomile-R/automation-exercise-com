/// <reference types="Cypress" />

import menu from '../pages/topNavBarPage';
import productsPage from '../pages/allProductsPage';
import newUserData from '../fixtures/newUserData';

const validUser = new newUserData();
const currentPage = new menu();
const allProductsPage = new productsPage();

describe("https://www.automationexercise.com/*", () => {
  beforeEach(() => {cy.openHomePage()});

  //Test Case 6: Contact Us Form
  it("Checks 'Contact Us' happy pass flow with correct user", () => {
    currentPage.forceClickAndCheck.button_ContactUs();
    cy.submitContactUsForm(validUser);
  });

  //Test Case 7: Verify Test Cases Page
  it("Checks 'Test Cases' page at https://www.automationexercise.com/test_cases", () => {
    currentPage.forceClickAndCheck.button_TestCases
  });

  //Test Case 8: Verify All Products and product detail page
  it("Checks 'All Products' page at https://www.automationexercise.com/products", () => {
    currentPage.forceClickAndCheck.button_Products();
    allProductsPage.checkTheProductsList();
    allProductsPage.checkTheFirstProduct();
  });

  //Test Case 10: Verify Subscription in home page
  it("Checks 'Subscribtion' at the footer", () => {
    cy.subscribeUserViaFooter(validUser);
  });

  //Test Case 11: Verify Subscription in Cart page
  it("Checks 'Subscribtion' at the footer", () => {
    currentPage.forceClickAndCheck.button_Cart();
    cy.subscribeUserViaFooter(validUser);
  });
  
});