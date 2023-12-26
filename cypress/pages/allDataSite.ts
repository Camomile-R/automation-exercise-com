/// <reference types="Cypress" />

import allProductsPageObj from "./allProductsPage";
import productDetailsPageObj from "./productDetailsPage";
import loginPageObj from "./loginPage";
import signUpPageObj from "./signUpPage";
import contactUsPageObj from "./contactUsPage";

export default class AllDataSite {

    allProductsPage = new allProductsPageObj();
    productDetailsPage = new productDetailsPageObj();
    loginPage = new loginPageObj();
    signUpPage = new signUpPageObj();
    contactUsPage = new contactUsPageObj();

    meta = {'URL': 'https://www.automationexercise.com'}; // <-- root of site, AllDataSite.ts

    topNavMenu = {
        //main
        'button_Home': '#header ul[class="nav navbar-nav"] a i[class*="fa-home"]',
        'button_Products': '#header ul[class="nav navbar-nav"] a i[class="material-icons card_travel"]',
        'button_Cart': '#header ul[class="nav navbar-nav"] a i[class="fa fa-shopping-cart"]',
        'button_SighUp_Login': '#header a[href="/login"]',
        'button_TestCases': '#header li:nth-child(5) > a i[class="fa fa-list"]',
        'button_ContactUs': '#header ul[class="nav navbar-nav"] a i[class="fa fa-envelope"]',
        //logged in only
        'button_DeleteAccount': '#header i[class="fa fa-trash-o"]',
        'button_Logout': '#header a[href="/logout"]',
        'header_LoggedInAs[user]': '#header  ul > li:nth-child(10) > a > b',
        'headerDefaultText': ' Logged in as '
      };// <-- all main Menu elements here

    homePage  = {
        'meta': {
            "title": 'Automation Exercise',
            "URL": '/'}
    };// <-- homePage.ts imitator

    viewCartPage  = {
        'meta': {
            "title": 'Automation Exercise - Checkout',
            "URL": '/view_cart'}
    };// <-- viewCartPage.ts imitator

    testCases = {
        'meta': {
            'title': 'Automation Practice Website for UI Testing - Test Cases',
            'h2TitleSelector': '[class="title text-center"]',
            'h2TitleText': 'Test Cases',
            'URL': '/test_cases'
        }
    };// <-- testCasePage.ts imitator
    accountCreated = {
        'meta': {
            'title': 'Automation Exercise - Account Created',
            'h2TitleSelector': '[class="title text-center"]',
            'h2TitleText': 'Account Created!',
            'URL': '/account_created',
            'continueBtn': '[data-qa="continue-button"]'
        }
    };// <-- accountCreated.ts imitator
    accountDeleted = {
        'meta': {
            'title': 'Automation Exercise - Account Created',
            'h2TitleSelector': '[class="title text-center"]',
            'h2TitleText': 'Account Deleted!',
            'URL': '/delete_account',
            'continueBtn': '[data-qa="continue-button"]'
        }
    };// <-- accountDeleted.ts imitator
    footerSubscriptionField = {
        'emailInput': 'input[id="susbscribe_email"]',
        'subscribeBtn': 'button[id="subscribe"]',
        'successAlertSelector': '[class="alert-success alert"]',
        'successAlertText': 'You have been successfully subscribed!',
        'cssTextColor': 'rgb(60, 118, 61)'
    };
    
    separatePageObj = {
        'home': this.homePage, 
        'allProducts': this.allProductsPage['exportedAsObj'], // <-- access to allProductsPage.ts
        'productDetails/AnyProduct': this.productDetailsPage['exportedAsObj'], // <-- access to productDetailsPage.ts
        'viewCart': this.viewCartPage,
        'login': this.loginPage['exportedAsObj'], // <-- access to loginPage.ts
        'signUp': this.signUpPage['exportedAsObj'], // <-- access to signUpPage.ts
        'contactUs': this.contactUsPage['exportedAsObj'], // <-- access to contactUsPage.ts
        'testCases': this.testCases,
        'accountCreated': this.accountCreated,
        'accountDeleted': this.accountDeleted
    };// <-- access to all other page objects
};