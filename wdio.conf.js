exports.config = {
    runner: 'local',
    framework: 'mocha',
    capabilities: [
      {
        platformName: 'iOS', // Testing platform
    platformVersion: '18.1', // The iOS version for the simulator
    deviceName: 'iPhone 15', // Name of the simulator device
    automationName: 'XCUITest', // Appium's automation driver for iOS
        app: '/app/wdiodemoapp.app/',
        noReset: true,
        fullReset: false,
      },
    ],
    baseUrl: 'http://127.0.0.1:4723',
    services: ['appium'],
    mochaOpts: {
      timeout: 60000,
    },
  };