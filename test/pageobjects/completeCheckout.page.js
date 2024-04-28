import Page from './page.js'

class CompleteCheckoutPage extends Page {
  //selectors and getters
  get confirmMessage() {
    return $('[data-test="complete-header"]')
  }
}

export default new CompleteCheckoutPage()
