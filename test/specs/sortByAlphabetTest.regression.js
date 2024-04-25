import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

const executeSortTest = async (sortOption) => {
  //precondition for this test is for user to be logged in
  await LoginPage.open()
  await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)

  //chose sorting option
  await HomePage.sortByAlphabet(sortOption)

  //retrieve names after sorting
  const names = await HomePage.saveItemNames()

  //check sorting order based on sortOption
  const isSorted =
    sortOption === 'Name (A to Z)'
      ? names.every((name, index, arr) => index == 0 || name >= arr[index - 1])
      : names.every((name, index, arr) => index === 0 || name <= arr[index - 1])

  //perform assertions based on sorting direction
  if (sortOption === 'Name (A to Z)') {
    expect(isSorted).toBe(true, 'Names are sorted from A to Z')
  } else {
    expect(isSorted).toBe(true, 'Names are sorted from Z to A')
  }
}

describe('Sort by alphabet test', () => {
  it('should sort from A to Z', async () => {
    await executeSortTest('Name (A to Z)')
  })
})

describe('Sort by alphabet test', () => {
  it('should sort from Z to A', async () => {
    await executeSortTest('Name (Z to A)')
  })
})
