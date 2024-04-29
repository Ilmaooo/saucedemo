import Page from './page.js'

class CheckoutPage extends Page {
  //selectors and getters
  get firstName() {
    return $('#first-name')
  }
  get lastName() {
    return $('#last-name')
  }
  get postalCode() {
    return $('#postal-code')
  }
  get continueButton() {
    return $('#continue')
  }

  //methods
  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.firstName.setValue(firstName)
    await this.lastName.setValue(lastName)
    await this.postalCode.setValue(postalCode)
    await this.continueButton.click()
  }
}

export default new CheckoutPage()
