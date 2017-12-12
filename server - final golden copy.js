/**
 * This is just a dummy server to facilidate our React SPA examples.
 * For a more professional setup of Express, see...
 * http://expressjs.com/en/starter/generator.html
 */

import express from 'express';
var mongoose = require("mongoose");
import path from 'path';
const app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var url = "mongodb://localhost:27017/signatures";


var promise = mongoose.connect(url);
promise.then(function(db) {
connection.openUri(url);
});



var signatureSchema = new mongoose.Schema({
   guestSignature: String,    
   message: String

});

var Signature = mongoose.model("Signature", signatureSchema);






/**
 * Anything in public can be accessed statically without
 * this express router getting involved
 */

app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false
}));


/**
 * Always serve the same HTML file for all requests
 */



app.get('/', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
 res.sendFile(path.resolve(__dirname, 'index.html'));
});



//==========================//
//====GET ALL SIGNATURES===//
app.get('/api/signatures', function(req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
//==========================//

app.get('/api/signatures/:id', (req, res) => {
    
   const reqId = req.params.id;
    
    
    Signature.findById(reqId, function(err, data) {
       if(err) {
        res.status(500).send({message: "couldn't send with id" + reqId});
       } else {
           res.send(data);
       }
    });
    
});






//====POST NEW SIGNATURE===//
app.post('/api/signatures', function(req, res) {
  Signature.create({
    guestSignature: req.body.guestSignature,
    message: req.body.message,
  }).then(signature => {
    res.json(signature)
  });
});
//==========================//


app.delete('/api/signatures/:id', (req, res) => {
     const reqId = req.params.id;
    
     Signature.remove({_id: reqId}, function(err, data) {
       if(err) {
        res.status(500).send({message: "couldn't find id" + reqId});
       } else {
       res.send({message: "signature " + reqId + " deleted successfully"});   
       }
    });
   
          
});










/**
 * Error Handling
 */

app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});


/**
 * Start Server
 */

const port = 3000;
app.listen(port);

console.log('Serving: localhost:' + port);