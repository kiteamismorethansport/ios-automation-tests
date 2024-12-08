export const config = {
    // Capabilities
    capabilities: [
        {
            platformName: 'iOS',
            platformVersion: '16.0',
            deviceName: 'iPhone 14',
            automationName: 'XCUITest',
            app: './apps/YourApp.app',
            noReset: true,
            fullReset: false,
        },
    ],

    // Framework
    framework: 'mocha',

    // Test Files
    specs: ['./test/specs/**/*.js'],

    // Services
    services: ['appium'],

    // Mocha Options
    mochaOpts: {
        timeout: 60000,
    },
};
