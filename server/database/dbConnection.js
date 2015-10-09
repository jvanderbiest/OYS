'use strict';
var mongoose = require('mongoose');
var config = require('../../gulp/config');

var models = ['./../models/store'];
var seedStore = require('./seed/store');
var catalogRepository = require('./repositories/store');

var dbConnection;

module.exports = function () {

    if (dbConnection) {
        return dbConnection;
    }

    var db = mongoose.connection;
    console.log(config.mongoDb);

    db.on('error', console.error);
    db.once('open', function () {
        var l = models.length;
        for (var i = 0; i < l; i++) {
            console.log('Loading mongodb schema: ' + models[i]);
            require(models[i])();
        };

        var CatalogRepository = catalogRepository(db);
        CatalogRepository.saveCatalog(config.dbData.catalogId, seedStore[0]);
    });

    mongoose.connect(config.mongoDb);
    console.log("mongodb connected");

    dbConnection = db;
    return db;
};