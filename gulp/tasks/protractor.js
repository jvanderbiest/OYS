'use strict';

var gulp            = require('gulp');
var protractor      = require('gulp-protractor').protractor;
var webdriver       = require('gulp-protractor').webdriver;
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var config          = require('../config');

gulp.task('webdriver-update', webdriverUpdate);
gulp.task('webdriver', webdriver);

gulp.task('protractor', ['webdriver-update', 'webdriver', 'server'], function(cb) {

  /*http://stackoverflow.com/questions/32844090/gulp-protractor-keep-saying-spec-patterns-did-not-match-any-files*/
  gulp.src([]).pipe(protractor({
      configFile: config.test.protractor
  })).on('error', function(err) {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  }).on('end', function() {
    process.exit();
    cb();
  });

});