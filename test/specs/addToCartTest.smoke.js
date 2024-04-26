import Page from '../pageobjects/page.js'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import ProductPage from '../pageobjects/product.page.js'
import CartPage from '../pageobjects/cart.page.js'

describe('Add to cart', () => {
  it('should add product to cart from product page', async () => {
    // Login and navigate to the home page
    await LoginPage.open()
    await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    // Click on the product using the custom locator
    await HomePage.clickProductByName('Sauce Labs Backpack')
    await expect(browser).toHaveUrl(
      'https://www.saucedemo.com/inventory-item.html?id=4',
    )

    // Add the product to cart and open the cart
    await ProductPage.addToCart()
    await ProductPage.openCart()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')

    //verify that the product is added to cart
    await expect(CartPage.itemQuantity).toHaveText('1')
  })
})
