/// <reference types="Cypress" />

import allDataSitePageObj from "../pages/allDataSite";
import loginPageObj from "../pages/loginPage";
import signUpPageObj from "../pages/signUpPage";
import contactUsPageObj from "../pages/contactUsPage";

const allDataSitePage = new allDataSitePageObj();
const loginPage = new loginPageObj();
const signUpPage = new signUpPageObj();
const contactUsPage = new contactUsPageObj();

Cypress.Commands.add("checkLoggedInUser", (anyUser: object) => {
  cy.get(allDataSitePage.topNavMenu["header_LoggedInAs[user]"]).should('contain', `${anyUser['userFirstName']}`);
});

Cypress.Commands.add("confirmUserRegistration", () => {
  cy.locationShouldBe('accountCreated');
  cy.get(allDataSitePage.accountCreated.meta.h2TitleSelector).contains(allDataSitePage.accountCreated.meta.h2TitleText);
  cy.get(allDataSitePage.accountCreated.meta.continueBtn).click({ force: true });
});

Cypress.Commands.add("deleteUser", (anyUser: object) => {
  cy.loginUser(anyUser);
  cy.get(allDataSitePage.topNavMenu['button_DeleteAccount']).click({force:true});
  cy.locationShouldBe('accountDeleted');
  cy.get(allDataSitePage.accountDeleted.meta.h2TitleSelector).should('contain', allDataSitePage.accountDeleted.meta.h2TitleText);
  cy.get(allDataSitePage.accountDeleted.meta.continueBtn).click({ force: true });
  cy.clearCookiesAndCache();
});

Cypress.Commands.add("fillInRegistrationForm", (anyUser: object) => {
  cy.locationShouldBe('signUp');
  cy.get(signUpPage.registerForm.passwordRequiredInput).focus().type(anyUser['userPassword'])
  //.contains(anyUser['userPassword']);
  cy.get(signUpPage.registerForm.firstNameRequiredInput).focus().type(anyUser['userFirstName'])
  //.contains(anyUser['userFirstName']);
  cy.get(signUpPage.registerForm.lastNameRequiredInput).focus().type(anyUser['userLastName'])
  //.contains(anyUser['userLastName']);
  cy.get(signUpPage.registerForm.addressRequiredInput).focus().type(anyUser['userAddress'])
  //.contains(anyUser['userAddress']);
  cy.get(signUpPage.registerForm.stateRequiredInput).focus().type(anyUser['userState'])
  //.contains(anyUser['userState']);
  cy.get(signUpPage.registerForm.cityRequiredInput).focus().type(anyUser['userCity'])
  //.contains(anyUser['userCity']);
  cy.get(signUpPage.registerForm.zipcodeRequiredInput).focus().type(anyUser['userZipcode'])
  //.contains(anyUser['userZipcode']);
  cy.get(signUpPage.registerForm.mobileRequiredInput).focus().type(anyUser['userMobile'])
  //.contains(anyUser['userMobile']);
  cy.get(signUpPage.registerForm.createAccountBtn).click({ force: true });
});

Cypress.Commands.add("fillInSignUpForm", (anyUser: object) => {
  cy.locationShouldBe('login');
  cy.get(loginPage.registerForm.nameInput).type(anyUser['userFirstName'])
      //.contains(anyUser['userFirstName']);
      cy.get(loginPage.registerForm.emailInput).type(anyUser['userEmail'])
      //.contains(anyUser['userEmail']);
      cy.get(loginPage.registerForm.registerBtn).click({force:true});
      cy.wait(3000);
});

Cypress.Commands.add("loginUser", (anyUser: object) => {
  cy.visit(loginPage.meta.URL);
  cy.locationShouldBe('login');
  cy.get(loginPage.loginForm.emailInput).type(anyUser['userEmail']).should("have.value", anyUser['userEmail']);
  cy.get(loginPage.loginForm.passwordInput).type(anyUser['userPassword']).should("have.value", anyUser['userPassword']);
  cy.get(loginPage.loginForm.loginBtn).click({force:true});
});

Cypress.Commands.add("registerUser", (anyUser: object) => {
  cy.loginUser(anyUser);
  cy.wait(2000);
  cy.get(allDataSitePage.topNavMenu["header_LoggedInAs[user]"])
  .should((_) => {}).then(($errorMessage) => {
    if(!$errorMessage.length){
      cy.log('User does not exist')
      cy.visit(loginPage.meta.URL);
      cy.fillInSignUpForm(anyUser);
      cy.fillInRegistrationForm(anyUser);
    } else {
      cy.log('User does exist => delete the user')
      cy.clearCookiesAndCache();
      cy.deleteUser(anyUser);
      cy.registerUser(anyUser);
    };
  });
});

Cypress.Commands.add("subscribeViaFooterWith", (email: string) => {
  cy.get(allDataSitePage.footerSubscriptionField.emailInput).focus().type(email);
  cy.get(allDataSitePage.footerSubscriptionField.subscribeBtn).click({force:true});
  cy.get(allDataSitePage.footerSubscriptionField.successAlertSelector)
  .contains(allDataSitePage.footerSubscriptionField.successAlertText)
  .should('have.css', 'color', allDataSitePage.footerSubscriptionField.cssTextColor);
});

Cypress.Commands.add("unloginTheUser", () => {
  cy.get(allDataSitePage.topNavMenu['button_Logout']).click({force:true});
  cy.locationShouldBe('login');
  cy.get(allDataSitePage.topNavMenu.button_SighUp_Login);
});

Cypress.Commands.add("submitContactUsForm", (anyUser: object) => {
  cy.title().should('contain', contactUsPage.meta.title);
  cy.get(contactUsPage.getInTouchForm.nameRequiredInput).focus().type(anyUser['userFirstName']);
  //cy.get(contactUsPage.getInTouchForm.nameRequiredInput).contains(anyUser['userFirstName']);
  cy.get(contactUsPage.getInTouchForm.emailRequiredInput).focus().type(anyUser['userEmail']);
  //.contains(anyUser['userEmail']);
  cy.get(contactUsPage.getInTouchForm.subjectOptionalInput).focus().type('SubjectTest')
  //.contains('SubjectTest');
  cy.get(contactUsPage.getInTouchForm.messageTextAreaInput).focus().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
  //.contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  cy.get(contactUsPage.getInTouchForm.fileUploadInput).selectFile({
    contents: Cypress.Buffer.from('file contents'),
    fileName: 'file.txt',
    lastModified: Date.now(),
  })
  cy.get(contactUsPage.getInTouchForm.submitBtn).click({force:true});
});