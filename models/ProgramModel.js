const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  program: { 
    type: String,
    trim: true 
    },
  description: {
    type: String,
    trim: true 
  },
});

module.exports = mongoose.model('Program',programSchema)