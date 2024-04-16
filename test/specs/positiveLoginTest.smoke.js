import LoginPage from '../pageobjects/login.page.js'


const user_accounts = [
    {username: process.env.USERNAME1},
    {username: process.env.USERNAME2},
    {username: process.env.USERNAME3},
    {username: process.env.USERNAME4},
    {username: process.env.USERNAME5},
    {username: process.env.USERNAME6},
]

// function to dynamically generate test cases for each username provided
user_accounts.forEach(user => {
    describe('My login', () => {
        it('should login with valid credentials and validate login', async () => {
            await LoginPage.open()
             
            //enter username and password
            await LoginPage.login(user.username, process.env.PASSWORD)

            if(user.username == process.env.USERNAME2){
                //expect error message since this user is locked out
                const errorMessage = await LoginPage.getErrorMessageText();
                await expect(errorMessage).toEqual('Epic sadface: Sorry, this user has been locked out.');
            } else {
                //expect to be redirected to inventory page after successfull login
                await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
            }
        })
    })
})
