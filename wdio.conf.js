export const config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    // =============
    // Capabilities
    // =============
    capabilities: [{
        platformName: 'iOS',
        'appium:platformVersion': '17.0',
        'appium:deviceName': 'iPhone 15',
        'appium:automationName': 'XCUITest',
        'appium:app': './apps/MyRNDemoApp.app',
        'appium:noReset': true,
        'appium:fullReset': false,
    }],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'debug',
    framework: 'mocha',
    mochaOpts: {
        timeout: 100000,
    },

    // =============
    // Appium Service
    // =============
    services: [
        ['appium', {
            // You can specify 'command: "appium"' if needed
            args: {
                // optional args; let Appium pick a port
                log: './appium.log',
            },
        }],
    ],
};
