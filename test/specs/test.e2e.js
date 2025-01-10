import fs from 'fs';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('My Demo application', () => {
    it('Button should be displayed', async () => {
        // Define the screenshots folder path in the root directory
        const screenshotsDir = `${process.cwd()}/screenshots`;

        // Check if the folder exists, and create it if not
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir, { recursive: true }); // Ensure directory exists
        }

        console.log('Saving screenshot before test');
        // Save a screenshot before
        await browser.saveScreenshot(`${screenshotsDir}/before-click.png`);

        console.log('Checking if it is displayed');
        // Perform the action
        await LoginPage.isPresent();

        console.log('Saving screenshot after test');
        // Save a screenshot after
        await browser.saveScreenshot(`${screenshotsDir}/after-click.png`);
    });
});