/// <reference types="Cypress" />

export default class productDetailsPage {

    meta = {
        'title': 'Automation Exercise - Product Details',
        'URL': '/product_details/' // <-- subdomain for all projects
    }

    theProductInfoBlock = { //selectors only
        'productName': '.product-information h2',
        'productCategory': '.product-information p',
        'productPrice': '.product-information span > span',
        'productAvailability': '.product-information p:nth-child(6) > b',
        'productCondition': '.product-information p:nth-child(7) > b',
        'productBrand': '.product-information p:nth-child(8) > b'
    };

    exportedAsObj = {
        'meta': this.meta
    };
};