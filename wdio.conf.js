//
// wdio.conf.js
//
export const config = {
    // ====================
    // Specify Test Files
    // ====================
    // Adjust the pattern if your tests are in a different folder or have a different extension
    specs: ['./test/specs/**/*.js'],

    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    // ==================
    // WebdriverIO Config
    // ==================
    // Increase the total time (in ms) for WebdriverIO to wait for a new session
    // especially helpful on slow CI machines.
    connectionRetryTimeout: 300000, // 5 minutes
    connectionRetryCount: 3,        // Attempt to reconnect up to 3 times

    // ===========
    // Capabilities
    // ===========
    capabilities: [
        {
            // Required
            platformName: 'iOS',

            // Appium / XCUITest Capabilities
            'appium:platformVersion': '17.0',
            'appium:deviceName': 'iPhone 15',
            'appium:automationName': 'XCUITest',
            'appium:app': './apps/MyRNDemoApp.app', // Make sure your .app is in this path
            'appium:noReset': true,
            'appium:fullReset': false,

            // Longer timeouts for WebDriverAgent on iOS
            'appium:wdaStartupRetries': 4,            // Retry launching WDA up to 4 times
            'appium:wdaStartupRetryInterval': 30000,  // Wait 30s between tries
            'appium:newCommandTimeout': 300,          // 5 minutes
        },
    ],

    // =================
    // Test Configurations
    // =================
    logLevel: 'debug',

    framework: 'mocha',
    mochaOpts: {
        // This is the per-test timeout (in ms)
        // If your tests do big actions or need more time, feel free to increase
        timeout: 200000,
    },

    // ==============
    // Appium Service
    // ==============
    // This spawns an Appium server automatically so you don’t need to manually start it.
    services: [
        [
            'appium',
            {
                // Optionally override command, e.g. command: 'appium'
                args: {
                    // log: './appium.log'  // Uncomment if you want a local log file
                },
            },
        ],
    ],

    // ====================
    // Hooks (optional)
    // ====================
    // If needed, you can define hooks here; for example, to add logging or custom logic
    // onPrepare: async function (config, capabilities) {
    //     // runs once before all workers get launched
    // },
    // onComplete: async function (exitCode, config, capabilities, results) {
    //     // runs once after all workers are done
    // },
};
