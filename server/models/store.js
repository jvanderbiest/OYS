'use strict';

var mongoose = require('mongoose');

module.exports = function() {
    var Schema = mongoose.Schema;

    var  StoreItem = new Schema({
        name: String,
        description: String,
        priceSmall: String,
        priceLarge: String,
        image: String
    });

    var StoreType = new Schema({
        name:  String,
        items: [StoreItem]
    });

    var Store = new Schema({
        storeName: String,
        types: [StoreType]
    });

   mongoose.model('Store', Store);
};