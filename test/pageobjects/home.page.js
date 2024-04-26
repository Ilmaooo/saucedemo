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
    const priceElements = await $$('[data-test="inventory-item-price"]')

    const prices = await priceElements.map(
      async (element) => await element.getText(),
    )

    const priceValues = prices.map((price) =>
      parseFloat(price.replace(/[^0-9.-]+/g, '')),
    )

    console.log('Sorted prices:', priceValues)
    return priceValues
  }

  async saveItemNames() {
    const nameElements = await $$('[data-test="inventory-item-name"]')

    const names = await nameElements.map((element) => element.getText())

    console.log('Sorted names:', names)
    return names
  }

  async isSorted(array, sortOption) {
    switch (sortOption) {
      case 'Name (A to Z)':
      case 'Price (low to high)':
        return array.every(
          (item, index, arr) => index === 0 || item >= arr[index - 1],
        )
      case 'Name (Z to A)':
      case 'Price (high to low)':
        return array.every(
          (item, index, arr) => index === 0 || item <= arr[index - 1],
        )
      default:
        console.error('Invalid sort option specified.')
        return false
    }
  }
  open() {
    return super.open('inventory.html')
  }
}

export default new HomePage()
