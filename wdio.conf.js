export const config = {
    // Capabilities
    capabilities: [
        {
            platformName: 'iOS',
            'appium:platformVersion': '16.0', // Add appium prefix
            'appium:deviceName': 'iPhone 14', // Add appium prefix
            'appium:automationName': 'XCUITest', // Add appium prefix
            'appium:app': './apps/YourApp.app', // Add appium prefix
            'appium:noReset': true, // Add appium prefix
            'appium:fullReset': false, // Add appium prefix
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
