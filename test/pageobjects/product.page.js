import Page from './page.js'

class ProductPage extends Page {
  //selectors
  get addToCartButton() {
    return $('#add-to-cart')
  }

  get backToProductsButton() {
    return $('#back-to-products')
  }

  //methods
  async addToCart() {
    await this.addToCartButton.click()
  }

  async backToProduct() {
    await this.backToProductsButton.click()
  }
}

export default new ProductPage()
