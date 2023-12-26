/// <reference types="Cypress" />

export default class SubProductsPage {

    title: "Automation Exercise - All Products";
    URL: '/products';


    checkTheProductsList() {cy.get('div[class="features_items"]').should('be.visible')};

    checkTheFirstProduct() {
        cy.visit(this.URL)
        cy.get('a[href="/product_details/1"] i[class="fa fa-plus-square"]').click({force:true})
        cy.title().should('contain', "Automation Exercise - Product Details");
        cy.get('.product-information').within(() => {
            cy.get('h2').should('be.visible'); //product name
            cy.get('p').should('be.visible'); //category
            cy.get('span > span').should('be.visible'); //price
            cy.get('p:nth-child(6) > b').should('be.visible'); //availability
            cy.get('p:nth-child(7) > b').should('be.visible'); //condition
            cy.get('p:nth-child(8) > b').should('be.visible'); //brand
        });
    };


    productItem ={
        viewProduct: (productID: string) => cy.get(`a[href="/product_details/${productID}"] i[class="fa fa-plus-square"]`).click({force:true})
    };
};