var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signatureSchema = new mongoose.Schema({
    
SignatureOfGuest: String,
MessageofGuest: String

    
    
});


module.exports = mongoose.model("Signature", signatureSchema);

 
