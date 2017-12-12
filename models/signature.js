var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signatureSchema = new mongoose.Schema({
    
guestSignature: String,
message: String

    
    
});


module.exports = mongoose.model("Signature", signatureSchema);

 
