const device= require('../models/device')

module.exports.get_all_devices= (req,res)=>{
    sort_by=req.body.sort
    var query_input={}
    if (req.body.device_name){
      query_input.device_name=req.body.device_name
    }if (req.body.device_id){
      query_input.device_id=req.body.device_id
    }if (req.body.device_address){
      query_input.device_address=req.body.device_address
    }if (req.body.region){
      query_input.region=req.body.region
    }if (req.body.town){
      query_input.town=req.body.town
    } if (req.body.device_status){
      query_input.device_status=req.body.device_status
    }if (req.body.record_date){
      query_input.record_date=req.body.record_date
    }else{
      query_input
    }
    
    console.log('query_device_id: '+JSON.stringify(query_input))
    device.find(query_input)
    .limit(req.body.limit)
    .sort({[sort_by]: -1})
    .exec()
    .then( results =>{
      all_data=[]
      if (results){
        for(i=0;i<results.length;i++){
          var dataObj={}
          var data=results[i]
          var device_id= data.device_id;
          var device_name=data.device_name;
          var device_address=data.device_address;
          var region=data.region;
          var town=data.town;
          var lattiude=data.lattiude;
          var longitude=data.longitude;
          var device_status=data.device_status
          var record_date=data.record_date
          var imageUrl=''
          if(device_status=='0'){
            imageUrl+='<img src="icons_maps/red.png" width="20" height="20">';
            
          }else 
          if(device_status=='1'){
            imageUrl+='<img src="icons_maps/green.png" width="20" height="20">'
         
          }else 
          if(device_status=='2'){
            imageUrl+='<img src="icons_maps/orange.png" width="20" height="20">'
         
          } else{
            imageUrl+='<img src="icons_maps/white.png" width="20" height="20">'
         
          }
          dataObj.device_id=device_id
          dataObj.device_name=device_name
          dataObj.device_address=device_address
          dataObj.region=region
          dataObj.town=town
          dataObj.lattiude=lattiude
          dataObj.longitude=longitude
          dataObj.device_status=device_status
          dataObj.record_date=record_date
          dataObj.imageUrl=imageUrl
          all_data.push(dataObj)


        }
        
     // console.log('all_dataall_dataall_data'+JSON.stringify(all_data))
        
      }
       var data={"data": all_data}
          res.status(200).json(data)
        }
       ).catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
        });
         }
module.exports.get_device_by_id=(req, res, next) => {
    const id = req.params.id;
    device.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res.status(404).json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }
module.exports.create_device=(req,res)=>{
    var post_data={_id:new mongoose.Types.ObjectId(),
                  device_id:req.body.device_id,
                  device_name:req.body.device_name,
                  device_address:req.body.device_address,
                  region:req.body.region,
                  town:req.body.town,
                  lattiude:req.body.lattiude,
                  longitude:req.body.longitude,
                  device_status:req.body.device_status }

    const OrderObj_input= new device(post_data)
    OrderObj_input.save().then(data =>{
    const message={message:'order was created',
                   status:201,
                   created_data:post_data}
           res.status(200).json(message)
    }
    ).catch(err => console.log(err));
    }
module.exports.patch_device=(req, res, next) => {
        const id = req.params.id;
        const updateOps = {};
        for (const ops of req.body) {
          updateOps[ops.propName] = ops.value;
        }
        device.update({ _id: id }, { $set: updateOps })
          .exec()
          .then(result => {
            console.log(result);
            res.status(200).json(result);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
      }     
module.exports.delete_device=(req,res,next)=>{
    var id =req.params.id
    device.remove({_id:id}).exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}