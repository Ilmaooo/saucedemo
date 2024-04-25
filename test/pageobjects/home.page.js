import Page from './page.js'

class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  get productSortContainer() {
    return $('[data-test="product-sort-container"]')
  }

  // Custom locator function for product name using XPath
  async getProductByName(productName) {
    return await $(`//*[contains(text(), "${productName}")]`)
  }

  async clickProductByName(productName) {
    const productElement = await this.getProductByName(productName)
    await productElement.click()
  }

  async sortByPrice(direction) {
    if (direction === 'Price (low to high)') {
      await this.productSortContainer.selectByAttribute('value', 'lohi')
    } else if (direction === 'Price (high to low)') {
      await this.productSortContainer.selectByAttribute('value', 'hilo')
    } else {
      console.error('Invalid direction specified for sorting.')
    }
    return
  }

  async sortByAlphabet(direction) {
    if (direction === 'Name (A to Z)') {
      await this.productSortContainer.selectByAttribute('value', 'az')
    } else if (direction === 'Name (Z to A)') {
      await this.productSortContainer.selectByAttribute('value', 'za')
    } else {
      console.error('Invalid direction specified for sorting.')
    }
    return
  }

  async saveItemPrices() {
    const productElements = await $$(
      '.inventory_item[data-test="inventory-item"]',
    )
    const prices = []

    for (const productElement of productElements) {
      const priceElement = await productElement.$(
        '[data-test="inventory-item-price"]',
      )
      const priceText = await priceElement.getText()
      const priceValue = parseFloat(priceText.replace(/[^0-9.-]+/g, ''))
      prices.push(priceValue)
    }

    console.log('Sorted prices:', prices)
    return prices
  }

  open() {
    return super.open('inventory.html')
  }
}

export default new HomePage()
