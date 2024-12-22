 import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
    await browser.saveScreenshot('./screenshots/before-click.png');
    await LoginPage.click()
    await browser.saveScreenshot('./screenshots/after-click.png');
    })
})

