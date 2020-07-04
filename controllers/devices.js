const device= require('../models/device')

module.exports.all_devices= (req,res)=>{
    device.find().exec().then( results=>{
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
        
        