const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  moduleName: { type: String,
     trim: true 
    },
  description: {
    type: String,
    trim: true 
  },
});

module.exports = mongoose.model('Service',serviceSchema)