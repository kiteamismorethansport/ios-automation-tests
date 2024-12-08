import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get biometricAuthentication() {
        return $('~Biometric authentication'); // '~' indicates Accessibility ID
    }

    
    async click () {
        await expect(this.biometricAuthentication).toBeDisplayed();
        await this.biometricAuthentication.click();
    }

}

export default new LoginPage();
