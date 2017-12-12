var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./dishes-1');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new dish
    var newDish = Dishes({
        name: 'Uthapizza',
        description: 'Test'
    });

    // save the dish to mongodb
    newDish.save(function (err) {
        if (err) throw err;
        console.log('Dish created!');

        // get all the dishes from db
        Dishes.find({}, function (err, dishes) {
            if (err) throw err;

            // clear all the dishes
            console.log(dishes);
                        db.collection('dishes').drop(function () {
                db.close();
            });
        });
    });
});