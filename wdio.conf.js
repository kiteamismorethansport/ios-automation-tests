export const config = {
    specs: ['./test/specs/**/*.js'],
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
      timeout: 200000,
    },
    logLevel: 'debug',
    services: [
      [
        'appium',
        {
          args: {
            log: './appium.log',
          },
        },
      ],
    ],
    reporters: [
        'spec',
        [
          'allure',
          {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
          }
        ]
      ],
    connectionRetryTimeout: 600000,
    connectionRetryCount: 3,
  
    capabilities: [
      {
        platformName: 'iOS',
        'appium:platformVersion': '17.5',
        'appium:deviceName': '55AC4BC1-FCCB-4CC4-B813-C1C82C46506D',
        'appium:automationName': 'XCUITest',
        'appium:app': './apps/MyRNDemoApp.app',
  
        // Ensure Appium doesn't reboot the sim,
        'appium:noReset': true,
        'appium:fullReset': false,
  
        // Give WebDriverAgent extra time
        'appium:wdaStartupRetries': 4,
        'appium:wdaStartupRetryInterval': 30000,
        'appium:newCommandTimeout': 300,
      },
    ],
  };
  