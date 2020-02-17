const mongoose = require('mongoose');

const USerShema = new mongoose.Schema({
    email: String,
    
});

module.exports =  mongoose.model('User',USerShema);