export default class SignUpPage {

registerForm = {
  //ENTER ACCOUNT INFORMATION

  //Title: [Mr./Mrs.]
  nameRequiredCheck: (userName: string) => cy.get('input[data-qa="name"]').contains(userName),
  nameRequiredInput: (userName: string) => cy.get('input[data-qa="name"]').focus().type(userName),
  emailRequiredCheck: (userEmail: string) => cy.get('input[data-qa="email"]').contains(userEmail),
  emailRequiredInput: (userEmail: string) => cy.get('input[data-qa="email"]').focus().type(userEmail),
  passwordRequiredInput: (userPassword: string) => cy.get('input[data-qa="password"]').focus().type(userPassword),
  //Date of Birth: Day & Month & Year
  //Sign up for our newsletter! [true/false]
  //Receive special offers from our partners! [true/false]
  //ADDRESS INFORMATION
  firstNameRequiredInput: (userFirstName: string) => cy.get('input[data-qa="first_name"]').focus().type(userFirstName),
  lastNameRequiredInput: (userLastName: string) => cy.get('input[data-qa="last_name"]').focus().type(userLastName),
  //Company
  addressRequiredInput: (userAddress: string) => cy.get('input[data-qa="address"]').focus().type(userAddress),
  //Address2
  //Country*: India
  stateRequiredInput: (userState: string) => cy.get('input[data-qa="state"]').focus().type(userState),
  cityRequiredInput: (userCity: string) => cy.get('input[data-qa="city"]').focus().type(userCity),
  zipcodeRequiredInput: (userZipcode: string) => cy.get('input[data-qa="zipcode"]').focus().type(userZipcode),
  mobileRequiredInput: (userMobile: string) => cy.get('input[data-qa="mobile_number"]').focus().type(userMobile),
  createAccountBtn: () => cy.get('button[data-qa="create-account"]').click({ force: true })
};

confirmUserRegistration() {
  cy.title().should("contain", "Automation Exercise - Account Created")
  cy.contains('Account Created!')
  .should("exist").and('be.visible');
  cy.get('a[data-qa="continue-button"]').click({ force: true })
}
}
