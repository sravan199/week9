const mongoose = require('mongoose');

const dataSchema =mongoose.Schema({

email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
},

});


var data = mongoose.model('loginRegisteration',dataSchema);

module.exports =data;