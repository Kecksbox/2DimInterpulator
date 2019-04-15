module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                // specifying tsconfig as a boolean will use the 'tsconfig.json' in same folder as Gruntfile.js
                tsconfig: true
            },
        },
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};