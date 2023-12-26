/// <reference types="Cypress" />

export default class LoginPage { 
    meta = {
        "title": 'Automation Exercise - Signup / Login',
        "URL": '/login'
    };
    loginForm = {
        'emailInput': 'input[data-qa="login-email"]',
        'passwordInput': 'input[data-qa="login-password"]',
        'loginBtn': 'button[data-qa="login-button"]'
    };
    registerForm = {
        'nameInput': 'input[data-qa="signup-name"]',
        'emailInput': 'input[data-qa="signup-email"]',
        'registerBtn': 'button[data-qa="signup-button"]'
    };
    exportedAsObj = {
        'meta': this.meta
    };
    incorrectUserValidation = {
        'messageSelector': 'form[action="/login"] >p',
        'messageText': 'Your email or password is incorrect!',
        'cssTextColor': 'rgb(255, 0, 0)'
    };
    existingUserValidation = {
        'messageSelector': 'form[action="/signup"] > p',
        'messageText': 'Email Address already exist!',
        'cssTextColor': 'rgb(255, 0, 0)'
    };
};