exports.config = {
    seleniumAddress: 'http://localhost:4445/wd/hub',

    capabilities: {
        browserName: 'chrome',
    },

    specs: [
        'e2e-tests/**/*.spec.js'
    ],

    framework: 'jasmine2',
};
