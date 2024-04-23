import Page from './page.js';

class ProductPage extends Page{

    //selectors
    get addToCartButton(){
        return $('#add-to-cart');
    }

    get backToProductsButton(){
        return $('#back-to-products');
    }

    get cartIcon(){
        return $('[data-test="shopping-cart-link"]');
    }

    //methods
    async addToCart(){
        await this.addToCartButton.click();
    }

    async backToProduct(){
        await this.backToProductsButton.click();
    }

    async openCart(){
        await this.cartIcon.click();
    }

}

export default new ProductPage();