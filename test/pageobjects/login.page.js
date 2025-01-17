import { $ } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get appButton() {
        return $('~longpress reset app'); // '~' indicates Accessibility ID
    }

    
    async isPresent () {
        await expect(this.appButton).toBeDisplayed();
        
    }

}

export default new LoginPage();
