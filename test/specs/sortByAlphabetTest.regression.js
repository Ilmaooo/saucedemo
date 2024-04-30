import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'


const executeSortTest = async (sortOption) => {
  const username = await LoginPage.getUsernameFromArgs()
  console.log('Username:', username)

  //precondition for this test is for user to be logged in
  await LoginPage.open()
  await LoginPage.login(username, process.env.PASSWORD)
  await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

  //chose sorting option
  await HomePage.sortByAlphabet(sortOption)

  //retrieve names after sorting
  const names = await HomePage.saveItemNames()

  // Perform assertions based on sorting direction
  if (sortOption === 'Name (A to Z)') {
    await expect(await HomePage.isSorted(names, sortOption)).toBe(
      true,
      'Names are sorted alphabetically from A to Z',
    )
  } else {
    await expect(await HomePage.isSorted(names, sortOption)).toBe(
      true,
      'Names are sorted alphabetically from Z to A',
    )
  }
}

describe('Sort by alphabet test from A to Z', () => {
  it('should sort from A to Z', async () => {
    await executeSortTest('Name (A to Z)')
  })
})

describe('Sort by alphabet test from Z to A', () => {
  it('should sort from Z to A', async () => {
    await executeSortTest('Name (Z to A)')
  })
})
