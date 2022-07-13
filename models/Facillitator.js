const mongoose = require("mongoose");

const facillitatorSchema = new mongoose.Schema({
  firstName: {
     type: String, 
    trim: true 
},
  lastName: { 
    type: String, 
    trim: true
 },
  email: { 
    type: String, 
    trim: true, 
    unique:true},
  phone: { 
    type: String,
     trim: true 
    },
  role: { type: String,
     trim: true 
    },
  department: { type: String, trim: true },
});

module.exports = mongoose.model('Facillitator',facillitatorSchema)