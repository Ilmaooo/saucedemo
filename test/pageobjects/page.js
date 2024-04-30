import { browser } from '@wdio/globals'

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`https://www.saucedemo.com/${path}`)
  }

  get cartIcon() {
    return $('[data-test="shopping-cart-link"]')
  }

  async openCart() {
    await this.cartIcon.click()
  }

  //get username from command line args
  getUsernameFromArgs = () => {
    const args = process.argv.slice(2)
    const usernameArg = args.find((arg) => arg.startsWith('--username='))
    const username = usernameArg
      ? usernameArg.split('=')[1]
      : process.env.USERNAME1
    return username
  }
}
