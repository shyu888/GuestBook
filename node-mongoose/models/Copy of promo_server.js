var mongoose = require('mongoose'),
    assert = require('assert');

var Promotions = require('./promotions');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';mongoose.connect(url);
var db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new promotion
    Promotions.create({
        name: 'Weekend Grand Buffet',
        image: 'images/buffet.png',
        label: 'New',
        price: '19.99',
        description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person',
        
        
    }, function (err, promotion) {
        if (err) throw err;
        console.log('Promotion created!');
        console.log(promotion);
      

        var id = promotion._id;

        // get all the promotions
        setTimeout(function () {
            Promotions.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })
                .exec(function (err, promotion) {
                    if (err) throw err;
                    console.log('Updated Promotion!');
                    console.log(promotion);      
      
                        db.collection('promotions').drop(function () {
                            db.close();
                        });
                  
                });
        }, 3000);
    });
});