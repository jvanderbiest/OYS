'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var server = require('./../../server/main');

gulp.task('server', function() {
  var expressServer = server(config.dist.root, config.serverPort);
  expressServer.start();
});