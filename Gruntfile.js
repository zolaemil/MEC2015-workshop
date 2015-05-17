module.exports = function(grunt) {

  'use strict';

  // Load plugins. 
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    watch: {},

    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    }
  });

  // Tasks.
  grunt.registerTask('run', ['connect', 'watch']);
  grunt.registerTask('default', ['run']);
}