/*
 * Copied from https://gist.github.com/ahomu/3596427
 *
 * grunt-coffeedoc
 * https://github.com/scyros/grunt-coffeedoc
 *
 * Copyright (c) 2014 Carlos León
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // var exec = require('exec');
  var exec = require('child_process').exec;

  /**
   * Task
   */
  grunt.registerMultiTask('coffeedoc',
    'Generate source documents from CoffeeScript files.',
    function() {
      var target  = this.data.target,
          options = this.options({
            output: 'docs',
            parser: 'commonjs',
            renderer: 'html'
          }),
          cmds = ['coffeedoc'],
          done = this.async();

      Object.keys(options).forEach(function(opt) {
        cmds.push('--' + opt + '=' + options[opt]);
      });

      cmds.push(target);

      exec(cmds.join(' '), function(err, stdout, stderr) {
        if (err === null) {
          grunt.log.ok(cmds.join(' '));
          grunt.log.ok('document created at ' + target);
        } else {
          grunt.fail.warn('If you want to using coffeedoc task. Please global install (option with -g) coffeedoc pakage from npm.');
        }
        done();
      });
    });
};
