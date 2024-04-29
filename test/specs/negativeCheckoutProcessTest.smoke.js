import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'
import OverviewCheckoutPage from '../pageobjects/overviewCheckout.page.js'
import Complete from '../pageobjects/completeCheckout.page.js'

describe('Checkout Process - Negative Tests', () => {
  it('should display an error message when checking out with an empty cart', async () => {
    //precondition is that the user is logged in
    await LoginPage.open()
    await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    //go to the cart, precondition is that the cart is empty
    await HomePage.openCart()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')

    //proceed to checkout
    await CartPage.proceedToCheckout()
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-step-one.html',
    )

    //fill out the checkout form
    await CheckoutPage.fillCheckoutForm('John', 'Doe', '12345')
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-step-two.html',
    )

    //complete checkout
    await OverviewCheckoutPage.finishCheckout()
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-complete.html',
    )
    await expect(Complete.confirmMessage).toHaveText(
      'Please add the products to the cart before checking out.',
    )
  })
})
