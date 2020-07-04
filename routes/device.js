const express=require('express');
const router=express.Router(); // this creates the router needed to handle http function(get,post,path,delete)
const device=require('../models/device')
const devices_ctrl=require('../controllers/devices')
const  mongoose=require('mongoose')
const checkAuth = require('../middleware/user-auth');
const RoleAuth = require('../middleware/roles-auth');


 //router.get('/',checkAuth,RoleAuth.admin_role,(req,res)=>{
  router.get('/',checkAuth,RoleAuth.admin_role,devices_ctrl.get_all_devices)      
  router.get("/:id",checkAuth,devices_ctrl.get_device_by_id);
  router.post('/', devices_ctrl.create_device)
  router.patch("/:id",devices_ctrl.patch_device);
  router.delete('/:id',devices_ctrl.delete_device);


    

module.exports=router;
