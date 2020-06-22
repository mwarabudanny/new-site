const mongoose=require('mongoose')

var device_structure={  _id:mongoose.Schema.Types.ObjectId,
                       device_id:{type: String,required: true},
                       device_name:String,
                       device_address:String,
                       region:String,
                       town:String,
                       lattiude:String,
                       longitude:String,
                       record_date: {type: Date,default: Date.now},
                       device_status:String }
 
const device_Schema=mongoose.Schema(device_structure) ; 

module.exports=mongoose.model('device_daily_table',device_Schema);