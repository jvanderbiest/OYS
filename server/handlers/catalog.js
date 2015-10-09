'use strict';

var config = require('./../../gulp/config');
var dbConnection = require('./../database/dbConnection');
var catalogRepository = require('./../database/repositories/store');

module.exports = function() {
    var conn = dbConnection();
    console.log('conn' + conn);
    var CatalogRepository = new catalogRepository(conn);

    return { get: get };

    function get(req, res) {
        getCatalogResult(function(err, result) {
            console.log('res' + result);
            res.send(200, result);
        });
    }

    function getCatalogResult(cb) {
        CatalogRepository.getCatalog(config.dbData.catalogName, function(err, result) {
            cb(err, result);
        });
    }
};
