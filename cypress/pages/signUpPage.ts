export default class SignUpPage {

  meta = {
    'title': 'Automation Exercise - Signup',
    'URL': '/signup'
  }
  exportedAsObj = {
    'meta': this.meta
  };

  registerForm = {
    'nameRequiredInput': 'input[data-qa="name"]',
    'emailRequiredInput': 'input[data-qa="email"]',
    'passwordRequiredInput': 'input[data-qa="password"]',
    'firstNameRequiredInput': 'input[data-qa="first_name"]',
    'lastNameRequiredInput': 'input[data-qa="last_name"]',
    'addressRequiredInput': 'input[data-qa="address"]',
    'stateRequiredInput': 'input[data-qa="state"]',
    'cityRequiredInput': 'input[data-qa="city"]',
    'zipcodeRequiredInput': 'input[data-qa="zipcode"]',
    'mobileRequiredInput': 'input[data-qa="mobile_number"]',
    'createAccountBtn': 'button[data-qa="create-account"]'
  };
}
