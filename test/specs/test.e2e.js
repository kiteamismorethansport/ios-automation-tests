import fs from 'fs';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const screenshotsDir = `${process.cwd()}/screenshots`;
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir); // Ensure directory exists
        }

        console.log('Saving screenshot before click');
        await browser.saveScreenshot(`${screenshotsDir}/before-click.png`);

        console.log('Performing click action');
        await LoginPage.click();

        console.log('Saving screenshot after click');
        await browser.saveScreenshot(`${screenshotsDir}/after-click.png`);
    });
});

