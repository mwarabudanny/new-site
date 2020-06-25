const express=require('express');
const router=express.Router(); // this creates the router needed to handle http function(get,post,path,delete)
const device=require('../models/device')
const  mongoose=require('mongoose')
const checkAuth = require('../middleware/user-auth');
const RoleAuth = require('../middleware/roles-auth');


 //router.get('/',checkAuth,RoleAuth.admin_role,(req,res)=>{
  router.get('/',(req,res)=>{
          device.find().exec().then( results=>{
             var data={"data": results}
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
