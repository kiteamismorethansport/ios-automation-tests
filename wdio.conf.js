export const config = {
    // Capabilities
    capabilities: [
        {
            platformName: 'iOS',
            'appium:platformVersion': '17.5', // Add appium prefix
            'appium:deviceName': 'iPhone 15', // Add appium prefix
            'appium:automationName': 'XCUITest', // Add appium prefix
            'appium:app': './apps/MyRNDemoApp.app', // Add appium prefix
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
        timeout: 120000,
    },
};
