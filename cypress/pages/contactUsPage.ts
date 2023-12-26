/// <reference types="Cypress" />

export default class ContactUsPage {

  meta = {
    'title': 'Automation Exercise - Contact Us',
    'URL': '/contact_us'
  }
  //Form
  getInTouchForm = {
    'nameRequiredInput': 'input[data-qa="name"]',
    'emailRequiredInput': 'input[data-qa="email"]',
    'subjectOptionalInput': 'input[data-qa="subject"]',
    'messageTextAreaInput': 'textarea[data-qa="message"]',
    'fileUploadInput': '[id="contact-us-form"] [name="upload_file"]',
    'submitBtn': 'input[data-qa="submit-button"]'
  };
  submittedFormElements = {
    'alert_SuccessSelector': 'div.status.alert.alert-success',
    'alert_SuccessMessage': 'Success! Your details have been submitted successfully.',
    'CSS_textColor': 'rgb(60, 118, 61)'
  }

  exportedAsObj = {
    'meta': this.meta,
    'getInTouchForm': this.getInTouchForm
  };
}