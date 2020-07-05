const mongoose = require('mongoose');

const vandalismSchema = mongoose.Schema({
      _id: mongoose.Schema.Types.ObjectId,
      report_by:{  type: String, required: true},
      type:{ type: String,required: false},
      description:{type: Number},
      area:{  type: String, required: false}, 
      latitude: { type: String, required: false },
      longitude:{  type: String, required: false}, 
      transformer_ID:{ type: String},
      record_date: {type: Date,default: Date.now},
      image_url:{ type: String},});

module.exports = mongoose.model('Vandalism', vandalismSchema);