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
    connectionRetryTimeout: 900000,
    connectionRetryCount: 3,
  
    capabilities: [
      {
        platformName: 'iOS',
        'appium:platformVersion': '17.5',
        'appium:deviceName': 'iPad Pro (11-inch) (4th generation)',
        'appium:automationName': 'XCUITest',
        'appium:app': './apps/MyRNDemoApp.app',
  
        // Ensure Appium doesn't reboot the sim,
        'appium:noReset': true,
        'appium:fullReset': false,
  
        // Give WebDriverAgent extra time
        'appium:wdaStartupRetries': 4,
        'appium:wdaStartupRetryInterval': 30000,
        'appium:newCommandTimeout': 600,
      },
    ],
  };
  