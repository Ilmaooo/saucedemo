import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

//website provides 6 usernames and one password, for positive login test, all usernames will be used

//test caase 1 using standard_user
describe('My login 1', () => {
    it('should login with valid credentials, using first username provided', async () => {
        await LoginPage.open()
         
        //enter username and password
        await LoginPage.login(process.env.USERNAME1, process.env.PASSWORD)
        
        //expect to be redirected to inventory page after successfull login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
}),

//test case 2 using locked_out_user
 describe('My login 2', () => {
    it('should display error message', async () => {
        await LoginPage.open()
         
        //enter username and password
        await LoginPage.login(process.env.USERNAME2, process.env.PASSWORD);
        
        //expect error message since this user is locked out
        const errorMessage = await LoginPage.getErrorMessageText();
        await expect(errorMessage).toEqual('Epic sadface: Sorry, this user has been locked out.');
    })
})

//test case 3 using problem_user
describe('My login 3', () => {
    it('should login with valid credentials, using third username provided', async () => {
        await LoginPage.open()
         
        //enter username and password
        await LoginPage.login(process.env.USERNAME3, process.env.PASSWORD)
        
        //expect to be redirected to inventory page after successfull login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
}),

//test case 4 usinq performance_glitch_user
describe('My login 4', () => {
    it('should login with valid credentials, using fourth username provided', async () => {
        await LoginPage.open()
         
        //enter username and password
        await LoginPage.login(process.env.USERNAME4, process.env.PASSWORD)
        
        //expect to be redirected to inventory page after successfull login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
}),

//test case 5 using error_user
describe('My login 5', () => {
    it('should login with valid credentials, using fifth username provided', async () => {
        await LoginPage.open()
         
        //enter username and password
        await LoginPage.login(process.env.USERNAME5, process.env.PASSWORD)
        
        //expect to be redirected to inventory page after successfull login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
}),


//test case 6 using visual_user
describe('My login 6', () => {
    it('should login with valid credentials, using sixth username provided', async () => {
        await LoginPage.open()
         
        //enter username and password
        await LoginPage.login(process.env.USERNAME6, process.env.PASSWORD)
        
        //expect to be redirected to inventory page after successfull login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})

