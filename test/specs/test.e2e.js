import fs from 'fs';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // Define the screenshots folder path in the root directory
        const screenshotsDir = `${process.cwd()}/screenshots`;

        // Check if the folder exists, and create it if not
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir, { recursive: true }); // Ensure directory exists
        }

        console.log('Saving screenshot before click');
        // Save a screenshot before the click action
        await browser.saveScreenshot(`${screenshotsDir}/before-click.png`);

        console.log('Performing click action');
        // Perform the click action
        await LoginPage.click();

        console.log('Saving screenshot after click');
        // Save a screenshot after the click action
        await browser.saveScreenshot(`${screenshotsDir}/after-click.png`);
    });
});