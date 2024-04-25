import HomePage from '../pageobjects/home.page.js'
import LoginPage from '../pageobjects/login.page.js'


const executeSortTest = async (sortOption) => {
  //precondition for this test is for user to be logged in
  await LoginPage.open()
  await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)
  await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

  //chose sorting option
  await HomePage.sortByPrice(sortOption)

  // Retrieve prices after sorting
  const prices = await HomePage.saveItemPrices()

  // Check sorting order based on sortOption
  const isSorted =
    sortOption === 'Price (low to high)'
      ? prices.every(
          (price, index, arr) => index === 0 || price >= arr[index - 1],
        )
      : prices.every(
          (price, index, arr) => index === 0 || price <= arr[index - 1],
        )

  // Perform assertions based on sorting direction using POM methods
  if (sortOption === 'Price (low to high)') {
    expect(isSorted).toBe(true, 'Prices are sorted from low to high')
  } else {
    expect(isSorted).toBe(true, 'Prices are sorted from high to low')
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
