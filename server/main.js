'use strict';

var http    = require('http');
var express = require('express');
var morgan  = require('morgan');
var catalogHandler = require('./handlers/catalog');
var routes = require('./routes/apiRoutes');

module.exports = function(url, port) {
    return { start: start };

    function start() {
        var handlers = {
            catalog: new catalogHandler()
        };

        console.log('url: ' + url);
        console.log('port: ' + port);

        var server = express();

        // log all requests to the console
        server.use(morgan('dev'));
        server.use(express.static(url));

        // Serve index.html for all routes to leave routing up to Angular
    /*    server.all('/!*', function(req, res) {
            res.sendFile('index.html', { root: 'build' });
        });*/

        // Start webserver if not already running
        var s = http.createServer(server);
        s.on('error', function(err){
            if(err.code === 'EADDRINUSE'){
                gutil.log('Development server is already started at port ' + port);
            }
            else {
                throw err;
            }
        });

        routes.setup(server, handlers);


        s.listen(port);
    }
};