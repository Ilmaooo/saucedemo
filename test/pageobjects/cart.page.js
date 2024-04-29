import Page from './page.js'

class CartPage extends Page {
  //selector and getters
  get checkoutButton() {
    return $('#checkout')
  }

  get continueShoppingButton() {
    return $('#continue-shopping')
  }

  get itemQuantity() {
    return $('[data-test="item-quantity"]')
  }

  async proceedToCheckout() {
    await this.checkoutButton.click()
  }
}

export default new CartPage()
