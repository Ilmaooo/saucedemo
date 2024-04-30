import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import ProductPage from '../pageobjects/product.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'
import OverviewCheckoutPage from '../pageobjects/overviewCheckout.page.js'
import Complete from '../pageobjects/completeCheckout.page.js'

describe('Checkout process', () => {
  it('should complete the checkout successfully', async () => {
    const username = await LoginPage.getUsernameFromArgs()
    console.log('Username:', username)

    //precondition for the test is for user to be logged in
    await LoginPage.open()
    await LoginPage.login(username, process.env.PASSWORD)
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    //next precondition is to have at least one product in the cart
    await HomePage.clickProductByName('Sauce Labs Bike Light')
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/inventory-item.html?id=0',
    )

    //add product to cart
    await ProductPage.addToCart()
    await ProductPage.openCart()
    await expect(CartPage.itemQuantity).toHaveText('1')

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

    //complete checkout process
    await OverviewCheckoutPage.finishCheckout()
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-complete.html',
    )
    await expect(Complete.confirmMessage).toHaveText(
      'Thank you for your order!',
    )
  })
})
