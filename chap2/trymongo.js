'use strict'

const MongoClient = require('mongodb')

function usage() {
    console.log("usage")
    console.log("node", __filename, '<option>')
    console.log("where option is one of:")
    console.log('callbacks use the callbacks paradiam')
    console.log('promises use the promises paradigm');
    console.log('generator use the paradigm');
    console.log('async use the async module');
}
if (process.argv.length < 3) {
    console.log("incorrect number of arguments")
    usage();
} else {
    if (process.argv[2] === 'callbacks') {
        testWithCallbacks();
    } else if (process.argv[2] === 'promises') {
        testWithPromises();
    }
    /*else if (process.argv[2] === 'generator') {
           testWithGenerator();
       } else if (process.argv[2] === 'async') {
           testWithAsync();
       } */
    else {
        console.log("invalid option:", process.argv[2]);
        usage();
    }
}

function testWithCallbacks() {
    MongoClient.connect('mongodb://localhost/playground', function(err, db) {
        db.collection('employees').insertOne({ id: 1, name: 'A.CallBack' }, function(err, result) {
            console.log("result of insert:", result.insertedId);
            db.collection("employees").find({ id: 1 }).toArray(function(err, docs) {
                console.log("result to find:", docs);
                db.close();
            })
        })
    })
}

function testWithPromises() {
    let db;
    MongoClient.connect('mongodb://localhost/playground')
        .then(connection => {
            db = connection;
            return db.collection('employees').insertOne({ id: 1, name: 'B.Promise' })
        })
        .then(result => {
            console.log("result of insert:", result.insertedId)
            return db.collection('employees').find({ id: 1 }).toArray();
        })
        .then(docs => {
            console.log("result of find:", docs);
            db.close();
        })
        .catch(err => {
            console.log("err in promise", err);
        })
}