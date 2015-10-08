'use strict';
var mongoose = require('mongoose');
var config = require('../../gulp/config.js');

var models = ['./../models/store.js'];
var seedStore = require('./seed/store');

module.exports = function connect() {

    var db = mongoose.connection;
console.log(config.mongoDb);
    db.on('error', console.error);
    db.once('open', function () {
        var l = models.length;
        for (var i = 0; i < l; i++) {
            console.log('Loading mongodb schema: ' + models[i]);
            require(models[i])();
        };

        // seed data
        var collection = db.collection('store');

        collection.update(
            {_id: '5616d574bebb5e8421f5d0e5' },
            {$setOnInsert: seedStore[0]},
            {upsert: true},
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Inserted %d documents into the "store" collection. The documents inserted with "_id" are:', result.result.ok, result.upserted);
                };
            }
        );


        collection.find({name: 'Bite me broodjes service'}).toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                console.log('Found:', result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
            }
        });
    });

    mongoose.connect(config.mongoDb);
    console.log("mongodb connected");
    return db;
};

module.exports();