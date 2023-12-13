export default class LoginPage { 
    visit() {
        cy.visit('https://www.automationexercise.com/login');
        cy.title().should('contain', "Automation Exercise - Signup / Login");
    };

    checkIncorrectUserValigadion() {
        cy.title().should('contain', "Automation Exercise - Signup / Login");
        cy.get('form[action="/login"] >p').contains("Your email or password is incorrect!").should('have.css', 'color').and('eq', 'rgb(255, 0, 0)')
    };
    checkExistingUserValigadion() {
        cy.title().should('contain', "Automation Exercise - Signup / Login");
        cy.get('form[action="/signup"] > p').contains("Email Address already exist!").should('have.css', 'color').and('eq', 'rgb(255, 0, 0)')
    };

    loginForm = {
        emailInput: (userEmail: string) => cy.get('input[data-qa="login-email"]').type(userEmail),
        passwordInput: (userPassword: string) => cy.get('input[data-qa="login-password"]').focus().type(userPassword),
        loginBtn: () => cy.get('button[data-qa="login-button"]').click({force:true})
    };
    registerForm = {
        nameInput: (userName: string) => cy.get('input[data-qa="signup-name"]').type(userName),
        emailInput: (userEmail: string) => cy.get('input[data-qa="signup-email"]').focus().type(userEmail),
        registerBtn: () => cy.get('button[data-qa="signup-button"]').click({force:true}),
        getRegistrationForm: () => cy.title().should('contain', "Automation Exercise - Signup")
    };

};