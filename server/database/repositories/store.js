'use strict';

module.exports = function (database) {

    var collection = database.collection('store');

    return { getCatalog: getCatalog,
        saveCatalog: saveCatalog };

    function getCatalog(catalogName, cb) {
        collection.find({name: catalogName}).toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                console.log('Found:', result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
            }

            if (cb) {
                cb(err, result);
            }
        });
    }

    function saveCatalog(catalogId, document, cb) {
        collection.update(
            {_id: catalogId },
            {$setOnInsert: document},
            {upsert: true},
            function(err, result) {
                if (err) { console.log(err); } else {
                    console.log('Inserted %d documents into the "store" collection. The documents inserted with "_id" are:', result.result.ok, result.upserted);
                }

                if (cb) {
                    cb(err, result);
                }
            }
        );
    }
};