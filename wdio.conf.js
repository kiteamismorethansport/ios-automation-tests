import { config as baseConfig } from '@wdio/sync';

export const config = {
    // Base URL for the WebdriverIO tests
    baseUrl: 'http://127.0.0.1:4723',

    // Capabilities
    capabilities: [
        {
          platformName: 'iOS', // Testing platform
      platformVersion: '18.1', // The iOS version for the simulator
      deviceName: 'iPhone 15', // Name of the simulator device
      automationName: 'XCUITest', // Appium's automation driver for iOS
          app: '/app/BitBarSampleApp.app/',
          noReset: true,
          fullReset: false,
        },
  
    ],

    // Framework
    framework: 'mocha',

    // Test Files
    specs: ['./tests/specs/**/*.js'],

    // Services
    services: ['appium'],

    // Mocha Options
    mochaOpts: {
        timeout: 60000,
    },
};
