/// <reference types="Cypress" />

import newUserData from '../fixtures/newUserData';
import knownUserData from '../fixtures/userData';
import LoginPage from '../pages/loginPage';
import signUpPage from '../pages/signUpPage';

const newUser = new newUserData();
const knownUser = new knownUserData();
const loginPage = new LoginPage();
const signupPage = new signUpPage();

describe("www.automationexercise.com/registerTests", () => {
  beforeEach(() => {
    cy.clearCookiesAndCache();
    cy.openHomePage();
  });
  
  //Test Case 1: Register User
  it("Register new user", () => {
    cy.registerUser(newUser.requiredData);
    signupPage.confirmUserRegistration();
    cy.checkLoggedInUser(newUser);
  });

  //Test Case 5: Register User with existing email
  it("Attempt to register existed user", () => {
    loginPage.visit();
    loginPage.registerForm.nameInput(knownUser.userFirstName);
    loginPage.registerForm.emailInput(knownUser.userEmail);
    loginPage.registerForm.registerBtn();
    loginPage.checkExistingUserValigadion();
  });
});