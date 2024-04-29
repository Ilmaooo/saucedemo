import Page from './page.js'

class OverviewCheckout extends Page {
  //selectors and getters
  get finishButton() {
    return $('#finish')
  }

  //methods
  async finishCheckout() {
    await this.finishButton.click()
  }
}

export default new OverviewCheckout()
