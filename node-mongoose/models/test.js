var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
 
// If you don't have the Currency variable declared you can use 'mongoose.Types.Currency'
var ProductSchema = Schema({
  price: { type: Currency }
});
 
var Product = mongoose.model('Product', ProductSchema);
 
var product = new Product({ price: "$1,200.55" });
product.price; // Number: 120055
product.price = 1200;
console.log(product.price);
product.price; // Number 1200 It will not round or multiply. Stored AS IS and should represent $12.00