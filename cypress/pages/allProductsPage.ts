/// <reference types="Cypress" />

export default class AllProductsPage {

    meta = {
        'title': 'Automation Exercise - All Products',
        'URL': '/products'
    }
    selectors = {
        'ProductsList': 'div[class="features_items"]',
        'tileProduct#': 'a[href="/product_details/',
        'tileProductClass': ' i[class="fa fa-plus-square"]'
    };

    exportedAsObj = {
        'meta': this.meta
    };
/////


    searchProductField = {
        makeInput(searchInput: string){cy.get('input[id="search_product"]').type(searchInput).contains(searchInput)},
        
        checkIfTheProductMatchSearchResult(searchInput: string){
            cy.get('[class="features_items"] [class="col-sm-4"]').within(() => {
                cy.get('h2')// <-- no implementation =(
            });
        }
    };
};