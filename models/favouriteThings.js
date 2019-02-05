let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    name: String,
    Description: String
},
{
    collection: "favouriteThings"
});

module.exports = mongoose.model('simran', contactSchema);