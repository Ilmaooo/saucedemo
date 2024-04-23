import Page from './page.js';

class CartPage extends Page {
    //selector and getters
    get checkoutButton(){
        return $('#checkout');
    }

    get continueShoppingButton(){
        return $('#continue-shopping');
    }

    get itemQuantity(){
        return $('[data-test="item-quantity"]');
    }

}

export default new CartPage();