// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

export const config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    browsers: {
      edge: true,
      safari: true,
      chrome: true,
    },
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    // @ts-ignore
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: StacktraceOption.PRETTY } }));
  }
};
