'use strict';

var grunt = require('grunt');

exports.coffeedoc = {
  dist: function(test) {
    test.expect(1);
    var actual = grunt.file.read('docs/test/src/example.coffee.html');
    var expected = grunt.file.read('test/expected/example.coffee.html');

    actual = actual.replace(/\s/g,"");
    expected = expected.replace(/\s/g,"");

    test.equal(actual, expected);
    test.done();
  }
};
