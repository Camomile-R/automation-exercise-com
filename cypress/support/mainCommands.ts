/// <reference types="Cypress" />

import allDataSitePageObj from "../pages/allDataSite";
import allProductsPageObj from "../pages/allProductsPage";
import productDetailsPageObj from "../pages/productDetailsPage";
import contactUsPageObj from "../pages/contactUsPage";
import loginPageObj from "../pages/loginPage";

const allDataSitePage = new allDataSitePageObj();
const allProductsPage = new allProductsPageObj();
const productDetailsPage = new productDetailsPageObj();
const loginPage = new loginPageObj();
const contactUsPage = new contactUsPageObj();

Cypress.Commands.add("checkContactUsFormSubmitted", () => { 
  cy.locationShouldBe('contactUs')
  cy.get(contactUsPage.submittedFormElements['alert_SuccessSelector']).contains(contactUsPage.submittedFormElements['alert_SuccessMessage'])
  .should('have.css', 'color').and('eq', contactUsPage.submittedFormElements['CSS_textColor']);
});

Cypress.Commands.add("checkDetailedViewProductDataIsVisible", () => { 
    cy.title().should('contain', allDataSitePage.productDetailsPage.meta.title);
    cy.get(productDetailsPage.theProductInfoBlock['productName']).should('be.visible');
    cy.get(productDetailsPage.theProductInfoBlock['productPrice']).should('be.visible');
    cy.get(productDetailsPage.theProductInfoBlock['productBrand']).should('be.visible');
    cy.get(productDetailsPage.theProductInfoBlock['productAvailability']).should('be.visible');
    cy.get(productDetailsPage.theProductInfoBlock['productCategory']).should('be.visible');
    cy.get(productDetailsPage.theProductInfoBlock['productCondition']).should('be.visible');
});

Cypress.Commands.add("checkExistingUserValidationAtSignUp", () => {
  cy.locationShouldBe('signUp'); // <-- because the site change URL!
  cy.get(loginPage.existingUserValidation.messageSelector)
  .contains(loginPage.existingUserValidation.messageText).should('have.css', 'color').and('eq', loginPage.existingUserValidation.cssTextColor);
});

Cypress.Commands.add("checkIfProductsListIsVisible", () => {cy.get(allProductsPage.selectors['ProductsList']).should('be.visible')});

Cypress.Commands.add("checkIncorrectUserValidationAtLogin", () => {
  cy.locationShouldBe('login');
  cy.get(loginPage.incorrectUserValidation.messageSelector)
  .contains(loginPage.incorrectUserValidation.messageText)
  .should('have.css', 'color').and('eq', loginPage.incorrectUserValidation.cssTextColor);
});

Cypress.Commands.add("clearCookiesAndCache", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

Cypress.Commands.add("clickMainMenuBtn", (buttonTitle: string) => {cy.get(allDataSitePage.topNavMenu[buttonTitle]).click({force:true})});

Cypress.Commands.add("locationShouldBe", (pageName: string) => {
  cy.url().should('eq', allDataSitePage.meta['URL'] + allDataSitePage.separatePageObj[pageName]['meta']['URL']);
  cy.title().should('contain', allDataSitePage.separatePageObj[pageName]['meta']['title']);
});

Cypress.Commands.add("openHomePage", () => {
  cy.visit('');
  cy.locationShouldBe('home')
});

Cypress.Commands.add("pickTheTileOfProduct", (number: string) => {
  cy.get(allProductsPage.selectors["tileProduct#"] + number + '"]'+ allProductsPage.selectors['tileProductClass']);
});

Cypress.Commands.add("verifyTestCasesPage", () => {
  cy.get(allDataSitePage.testCases.meta.h2TitleSelector).should('contain', allDataSitePage.testCases.meta.h2TitleText);
});