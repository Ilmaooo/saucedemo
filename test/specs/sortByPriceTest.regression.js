import HomePage from '../pageobjects/home.page.js'
import LoginPage from '../pageobjects/login.page.js'
import { getUsernameFromArgs } from '../helpers/commandLineArgs.js'

const executeSortTest = async (sortOption) => {
  const username = getUsernameFromArgs()
  console.log('Username:', username)

  //precondition for this test is for user to be logged in
  await LoginPage.open(username, process.env.PASSWORD)
  await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

  //chose sorting option
  await HomePage.sortByPrice(sortOption)

  // Retrieve prices after sorting
  const prices = await HomePage.saveItemPrices()

  // Perform assertions based on sorting direction
  if (sortOption === 'Price (low to high)') {
    await expect(await HomePage.isSorted(prices, sortOption)).toBe(
      true,
      'Prices are sorted from low to high',
    )
  } else {
    await expect(await HomePage.isSorted(prices, sortOption)).toBe(
      true,
      'Prices are sorted from high to low',
    )
  }
}

describe('Sort by price test low to high', () => {
  it('should sort from low to high', async () => {
    await executeSortTest('Price (low to high)')
  })
})

describe('Sort by price test high to low', () => {
  it('should sort from high to low', async () => {
    await executeSortTest('Price (high to low)')
  })
})
