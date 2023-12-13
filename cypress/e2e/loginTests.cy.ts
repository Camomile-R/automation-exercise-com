/// <reference types="Cypress" />

import userData from '../fixtures/userData';
import logInPage from '../pages/loginPage'

const validUser = new userData();
const invalidUser = new userData();
const loginPage = new logInPage();

invalidUser.credentials.userEmail = 'invalidUser@test'
invalidUser.credentials.userPassword = 'invalidUserTest'

describe("www.automationexercise.com/loginTests", () => {
  beforeEach(() => {
    cy.openHomePage();
    loginPage.visit();
  });

  //Test Case 2: Login User with correct email and password
  it("Checks login with correct user", () => {
    cy.loginUser(validUser.credentials);
    cy.checkLoggedInUser((validUser));
  });

  //Test Case 3: Login User with incorrect email and password
  it("Checks login with incorrect user", () => {
    cy.loginUser(invalidUser.credentials);
    loginPage.checkIncorrectUserValigadion();
  });

  //Test Case 4: Logout User
  it("Checks check unlogin with correct user", () => {
    cy.loginUser(validUser.credentials);
    cy.checkLoggedInUser((validUser));
    cy.unloginTheUser();
  });
});