// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
// we're connected!
});

 var kittySchema = mongoose.Schema({
      
      name: String
      });
      
var Kitten = mongoose.model('Kitten', kittySchema);

 var silence = new Kitten({name: 'Silence'});
 
 console.log(silence.name); // 'Silence'
 
 kittySchema.methods.speak = function () {
 
 var greeting = this.name ? "Meow name is " + this.name : " I don't have a name";
 
  console.log(greeting);
 }
 var Kitten = mongoose.model('Kitten', kittySchema);
 
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak; // "Meow name is fluffy"



fluffy.save(function (err, fluffy) {
    if (fluffy != null) {
    fluffy = "";
    } 
    
    else {  
  if (err) return console.error(err);
 
};    
});
    


Kitten.find(function (err, mykittens) {
  if (err) return console.error(err);
  console.log(mykittens);
});

// Kitten.find({ name: /^Fluff/ });

