var mongoose = require('mongoose'),
    assert = require('assert');

var Leaders = require('./leadership');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';mongoose.connect(url);
var db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new leader
    Leaders.create({
        name: 'Peter Pan',
        image: 'images/alberto.png',
        designation: 'Chief Epicurious Officer',
        abbr: 'CEO',
        description: 'Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mothers wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.',
        
     more_leader:[
        
        {
       name: "Dhanasekaran Witherspoon",
      image: "images/alberto.png",
      designation: "Chief Food Officer",
      abbr: "CFO",
      description: "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!" 
        
    } 
             
        ]   
                   
        
    }, function (err, leader) {
        if (err) throw err;
        console.log('Leadership created!');
        console.log(leader);
      

        var id = leader._id;

        // get all the leaders
        setTimeout(function () {
            Leaders.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })
                .exec(function (err, leader) {
                    if (err) throw err;
                    console.log('Updated Leadership!');
                    console.log(leader);    
                
                
                 leader.more_leader.push({
                  name: 'Agumbe Tang',
                  image: 'images/alberto.png',
                  designation: 'Chief Taste Officer',
                  abbr: 'CTO',
                  description: 'Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.'
                    });
     
               
        leader.save(function (err, leader) {
                        console.log('Updated Leaders!');
                        console.log(leader);       
                    					  
                        db.collection('leaders').drop(function () {                   
                                         
                          db.close();
                        });
                    });
                });
        }, 3000);
    });
});




