import Page from './page.js';

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }

    get errorMessage () {
        return $('.error-message-container.error h3');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessageText(){
        await this.errorMessage.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'Error message element is not displayed within 5 seconds'
        });
        console.log('Error message element:', await this.errorMessage.getText());
        return this.errorMessage.getText();  
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();
