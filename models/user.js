const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
      _id: mongoose.Schema.Types.ObjectId,
      user_id:{  type: String, required: true},
      password: { type: String, required: true },
      name:{  type: String, required: false}, 
      surname:{ type: String,required: false},
      phone:{type: Number},
      du_id:{ type: String},
      role:{ type: String,required:true},
      user_status:{ type: String,required:false,default:'Pending'},
      email: { type: String, required: false, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/}
});

module.exports = mongoose.model('User', userSchema);