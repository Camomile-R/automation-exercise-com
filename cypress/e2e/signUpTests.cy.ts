/// <reference types="Cypress" />

import userDataObj from '../fixtures/user';

const userData = new userDataObj();

describe("www.automationexercise.com/register >> Tests", () => {
  beforeEach(() => {
    cy.clearCookiesAndCache();
    cy.openHomePage();
  });
  
  //Test Case 1: Register User
  it("Register new user", () => {
    cy.registerUser(userData.newUser);
    cy.confirmUserRegistration();
    cy.checkLoggedInUser(userData.newUser);
  });

  //Test Case 5: Register User with existing email
  it("Attempt to register existed user", () => {
    cy.visit('/login');
    cy.fillInSignUpForm(userData.validUser);
    cy.checkExistingUserValidationAtSignUp();
  });
});