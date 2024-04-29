import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import ProductPage from '../pageobjects/product.page.js'
import CartPage from '../pageobjects/cart.page.js'

describe('Add to cart', () => {
  it('should add product to cart from product page', async () => {
    //get command line arguments starting from index 2
    const args = process.argv.slice(2)

    // Find the argument containing '--username='
    const usernameArg = args.find((arg) => arg.startsWith('--username='))

    // Extract the username if the argument exists
    const username = usernameArg
      ? usernameArg.split('=')[1]
      : process.env.USERNAME1 // Default to USERNAME1 if not specified
    console.log('Command-line arguments:', args)
    console.log('Username index:', usernameArg)
    console.log('Username:', username)

    // Login and navigate to the home page
    await LoginPage.open()
    await LoginPage.login(username, process.env.PASSWORD)
    console.log('username:', username)
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
