let config = './test/config/suite.mocha.conf.js'

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            test: {
                configFile: config
            },
            test_login: {
              options: {
                suite: ['login']
              },
              configFile: config
            },
            test_registration: {
              options: {
                suite: ['register']
              },
              configFile: config
            }
            // test-mobile: {
            //     configFile: './test/config/suite.appium.conf.js'
            // },
        },
    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('default', ['webdriver:test']);
    //grunt.registerTask('default', ['webdriver:test-mobile']);
};
