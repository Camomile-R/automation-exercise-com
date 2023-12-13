/// <reference types="Cypress" />

import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";
import contactUsPage from "../pages/contactUsPage";

const theLoginPage = new loginPage();
const theSignUpPage = new signUpPage();
const contactusPage = new contactUsPage();

Cypress.Commands.add("checkLoggedInUser", (anyUser: object) => {
  cy.get('#header').within(() => {cy.get('ul.navbar-nav').should('contain', `Logged in as ${anyUser['userFirstName']}`)});
});

Cypress.Commands.add("clearCookiesAndCache", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

Cypress.Commands.add("deleteUser", (anyUser: object) => {
  cy.loginUser(anyUser);
  cy.get('i[class="fa fa-trash-o"]').click({force:true});
  cy.title().should('contain', "Automation Exercise - Account Created");
  cy.get('h2[class="title text-center"]').should('contain', "Account Deleted!");
  cy.clearCookies();
  cy.clearLocalStorage();
});

Cypress.Commands.add("openHomePage", () => {
  cy.visit('');
  cy.title().should('contain', "Automation Exercise");
});

Cypress.Commands.add("loginUser", (anyUser: object) => {
  theLoginPage.visit();
  theLoginPage.loginForm.emailInput(anyUser['userEmail']).should("have.value", anyUser['userEmail']);
  theLoginPage.loginForm.passwordInput(anyUser['userPassword']).should("have.value", anyUser['userPassword']);
  theLoginPage.loginForm.loginBtn();
});

Cypress.Commands.add("registerUser", (anyUser: object) => {
  cy.loginUser(anyUser);
  cy.wait(2000);
  cy.get('i[class*="user"]')
  .should((_) => {}).then(($errorMessage) => {
    if (!$errorMessage.length) {
      cy.log('User does not exist')
      //theLoginPage.visitLoginPage();
      theLoginPage.registerForm.nameInput(anyUser['userFirstName']);
      theLoginPage.registerForm.emailInput(anyUser['userEmail']);
      theLoginPage.registerForm.registerBtn();
      theLoginPage.registerForm.getRegistrationForm();
      //Signup page
      //theSignUpPage.registerForm.nameRequiredCheck(userName);
      //theSignUpPage.registerForm.nameRequiredInput(userName);
      //theSignUpPage.registerForm.emailRequiredCheck(userEmail);
      theSignUpPage.registerForm.passwordRequiredInput(anyUser['userPassword']);
      theSignUpPage.registerForm.firstNameRequiredInput(anyUser['userFirstName']);
      theSignUpPage.registerForm.lastNameRequiredInput(anyUser['userLastName']);
      theSignUpPage.registerForm.addressRequiredInput(anyUser['userAddress']);
      theSignUpPage.registerForm.stateRequiredInput(anyUser['userState']);
      theSignUpPage.registerForm.cityRequiredInput(anyUser['userCity']);
      theSignUpPage.registerForm.zipcodeRequiredInput(anyUser['userZipcode']);
      theSignUpPage.registerForm.mobileRequiredInput(anyUser['userMobile']);
      theSignUpPage.registerForm.createAccountBtn();
    } else {
      cy.log('User does exist => delete the user')
      cy.clearCookiesAndCache();
      cy.deleteUser(anyUser);
      cy.registerUser(anyUser);
    };
  });
});
  
Cypress.Commands.add("submitContactUsForm", (anyUser: object) => { 
  //happy pass for any user
  contactusPage.visit();
  contactusPage.getInTouchForm.nameRequiredInput(anyUser['userFirstName']);
  contactusPage.getInTouchForm.emailRequiredInput(anyUser['userEmail']);
  contactusPage.getInTouchForm.subjectOptionalInput('SubjectTest');
  contactusPage.getInTouchForm.messageTextAreaInput('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  contactusPage.getInTouchForm.clickSubmitBtn();
  contactusPage.confirmSubmittedForm();
});

Cypress.Commands.add("subscribeUserViaFooter", (anyUser: object) => {
  cy.get('input[id="susbscribe_email"]').focus().type(anyUser['userEmail']);
  cy.get('button[id="subscribe"]').click({force:true});
  cy.get('[class="alert-success alert"]').contains("You have been successfully subscribed!").should('have.css', 'color')
});

Cypress.Commands.add("unloginTheUser", () => {
  cy.get('a[href="/logout"]').click({force:true});
  cy.title().should("contain", "Automation Exercise");
  cy.get('#header').within(() => {cy.get('a[href="/login"]').should('contain', ' Signup / Login')});
});
