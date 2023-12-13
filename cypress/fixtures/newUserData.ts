export default class newUserData {
  // registrable user
  userEmail = "newuser@at.qa";
  userPassword = "pikachU#QA";
  userName = "TEST";
  userFirstName = "firstNameTest";
  userLastName = "lastNameTest";
  userAddress = "addressTest";
  userState = "stateTest";
  userCity = "cityTest";
  userZipcode = "zipcodeTest";
  userMobile = "mobileTest";
  requiredData = {
    "userEmail": "newuser@at.qa",
    "userPassword": "pikachU#QA",
    "userName": "TEST",
    "userFirstName": "firstNameTest",
    "userLastName": "lastNameTest",
    "userAddress": "addressTest",
    "userState": "stateTest",
    "userCity": "cityTest",
    "userZipcode": "zipcodeTest",
    "userMobile": "mobileTest"
  }

deleteUser() {
  cy.clearCookiesAndCache();
  cy.deleteUser(this.requiredData)
};
}
//JSON Template
// {
//   "userEmail": "newuser@at.qa",
//   "userPassword": "pikachU#QA",
//   "userName": "TEST",
//   "userFirstName": "firstNameTest",
//   "userLastName": "lastNameTest",
//   "userAddress": "addressTest",
//   "userState": "stateTest",
//   "userCity": "cityTest",
//   "userZipcode": "zipcodeTest",
//   "userMobile": "mobileTest"
// }