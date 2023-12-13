/// <reference types="Cypress" />
export default class ContactUsPage {
    visit() {
        cy.visit('/contact_us');
        cy.title().should('contain', "Automation Exercise - Contact Us");
    };
    getInTouchForm = {
      nameRequiredInput: (userName: string) => cy.get('input[data-qa="name"]').focus().type(userName),
      emailRequiredInput: (userEmail: string) => cy.get('input[data-qa="email"]').focus().type(userEmail),
      subjectOptionalInput: (subjectText: string) => cy.get('input[data-qa="subject"]').focus().type(subjectText),
      messageTextAreaInput: (messageText: string) => cy.get('textarea[data-qa="message"]').focus().type(messageText),
      //input file upload
      clickSubmitBtn: () => cy.get('input[data-qa="submit-button"]').click({ force: true })
    };
    
    confirmSubmittedForm() {
      cy.title().should("contain", "Automation Exercise - Contact Us")
      cy.get('div.status.alert.alert-success')
      .contains("Success! Your details have been submitted successfully.").should('have.css', 'color').and('eq', 'rgb(60, 118, 61)')
    }
    }
    