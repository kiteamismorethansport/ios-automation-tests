export const config = {
    //
    // Where to find your test files
    //
    specs: ['./test/specs/**/*.js'],

    //
    // Runner Configuration
    //
    runner: 'local',

    //
    // Capabilities
    //
    capabilities: [{
        platformName: 'iOS',
        'appium:platformVersion': '17.0',
        'appium:deviceName': 'iPhone 15',
        'appium:automationName': 'XCUITest',
        'appium:app': './apps/MyRNDemoApp.app',
        'appium:noReset': true,
        'appium:fullReset': false,
    }],

    //
    // Test Configurations
    //
    logLevel: 'debug',
    framework: 'mocha',
    mochaOpts: {
        timeout: 100000,
    },

    //
    // Use built-in Appium service (spawns Appium automatically)
    //
    services: [
        ['appium', {
            args: {
                log: './appium.log',
            },
        }],
    ],
};
