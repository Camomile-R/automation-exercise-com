/// <reference types="Cypress" />

import userDataObj from '../fixtures/user';

const userData = new userDataObj();

describe("www.automationexercise.com/login >> Tests", () => {
  beforeEach(() => {
    cy.clearCookiesAndCache();
    cy.openHomePage();
  });

  //Test Case 2: Login User with correct email and password
  it("Checks login with correct user", () => {
    cy.loginUser(userData['validUser']);
    cy.checkLoggedInUser((userData['validUser']));
  });

  //Test Case 3: Login User with incorrect email and password
  it("Checks login with incorrect user", () => {
    cy.loginUser(userData['invalidUser']);
    cy.checkIncorrectUserValidationAtLogin();
  });

  //Test Case 4: Logout User
  it("Checks unlogin with correct user", () => {
    cy.loginUser(userData['validUser']);
    cy.checkLoggedInUser((userData['validUser']));
    cy.unloginTheUser();
  });
});