import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

const executeSortTest = async (sortOption, expectedValue) => {
  await LoginPage.open()
  await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)

  await HomePage.sortByAlphabet(sortOption)
  await expect(HomePage.productSortContainer).toHaveValue(expectedValue)
}

describe('Sort by alphabet test', () => {
  it('should sort from A to Z', async () => {
    await executeSortTest('Name (A to Z)', 'az')
  })
})

describe('Sort by alphabet test', () => {
  it('should sort from Z to A', async () => {
    await executeSortTest('Name (Z to A)', 'za')
  })
})
