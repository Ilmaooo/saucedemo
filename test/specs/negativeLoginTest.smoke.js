import LoginPage from '../pageobjects/login.page.js'

describe('Invalid login', () => {
  it('should display error message for invalid credentials', async () => {
    //open login page
    await LoginPage.open()

    //enter invalid username and password
    await LoginPage.login('invalid', 'invalid')

    //expect error message for invalid credentials
    const errorMessage = await LoginPage.getErrorMessageText()
    await expect(errorMessage).toEqual(
      'Epic sadface: Username and password do not match any user in this service',
    )
  })
})
