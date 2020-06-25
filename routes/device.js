const express=require('express');
const router=express.Router(); // this creates the router needed to handle http function(get,post,path,delete)
const device=require('../models/device')
const  mongoose=require('mongoose')
const checkAuth = require('../middleware/user-auth');
const RoleAuth = require('../middleware/roles-auth');


 //router.get('/',checkAuth,RoleAuth.admin_role,(req,res)=>{
  router.get('/',checkAuth,(req,res)=>{
          device.find().exec().then( results=>{
            console.log()
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
                 // console.log("is one"+device_id)
                  imageUrl+='<center><img src="icons_maps/red.png" width="20" height="20"></center>';
                  
                }else 
                if(device_status=='1'){
                  imageUrl+='<center><img src="icons_maps/green.png" width="20" height="20"></center>'
               
                }else 
                if(device_status=='2'){
                  imageUrl+='<center><img src="icons_maps/orange.png" width="20" height="20"></center>'
               
                } else{
                  imageUrl+='<center><img src="icons_maps/white.png" width="20" height="20"></center>'
               
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
               }) 
                 
         router.get("/:id", (req, res, next) => {
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
                   });
    
         router.post('/',(req,res)=>{
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
        })
        // patching will be used to patch the date and status of the device
        router.patch("/:id", (req, res, next) => {
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
        });
      router.delete('/:id',(req,res,next)=>{
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
      });


    

module.exports=router;
