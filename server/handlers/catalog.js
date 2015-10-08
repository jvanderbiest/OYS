'use strict';

var config = require('./../../gulp/config');

module.exports = function() {
    return { get: get };

    function get(req, res) {
        res.send(200, 'ok');
    }
};
