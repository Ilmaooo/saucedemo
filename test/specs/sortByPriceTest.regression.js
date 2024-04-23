import HomePage from '../pageobjects/home.page.js'
import LoginPage from '../pageobjects/login.page.js'

/* describe('Sort by price test', () => {
  it('should sort from low to high', async () => {
    //precondition is for user to be logged in
    await LoginPage.open()
    await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    //Price (low to high)
    await HomePage.sortByPrice('Price (low to high)')
    await expect(HomePage.productSortContainer).toHaveValue('lohi')
  })
})

describe('Sort by price test', () => {
  it('should sort from high to low', async () => {
    await LoginPage.open()
    await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    //Price (high to low)
    await HomePage.sortByPrice('Price (high to low)')
    await expect(HomePage.productSortContainer).toHaveValue('hilo')
  })
}) */

const executeSortTest = async (sortOption, expectedValue) => {
  await LoginPage.open()
  await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)
  await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

  await HomePage.sortByPrice(sortOption)
  await expect(HomePage.productSortContainer).toHaveValue(expectedValue)
}

describe('Sort by price test', () => {
  it('should sort from low to high', async () => {
    await executeSortTest('Price (low to high)', 'lohi')
  })
})

describe('Sort by price tst', () => {
  it('should sort from high to low', async () => {
    await executeSortTest('Price (high to low)', 'hilo')
  })
})
