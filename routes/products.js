const express=require('express');
const router=express.Router(); // this creates the router needed to handle http function(get,post,path,delete)

 var all_data=[
    {
      "name": "Manning Boyer",
      "gender": "male",
      "company": "FLOTONIC",
      "email": "manningboyer@flotonic.com",
      "phone": "+1 (993) 512-2673",
      "address": "190 Stewart Street, Chestnut, Iowa, 5496"
    },
    {
      "name": "Susan Powers",
      "gender": "female",
      "company": "CONFERIA",
      "email": "susanpowers@conferia.com",
      "phone": "+1 (907) 530-2604",
      "address": "332 Harway Avenue, Rivers, Tennessee, 4463"
    },
    {
      "name": "Kay Mejia",
      "gender": "female",
      "company": "BILLMED",
      "email": "kaymejia@billmed.com",
      "phone": "+1 (957) 543-3037",
      "address": "573 Dakota Place, Whipholt, Arizona, 8488"
    },
    {
      "name": "Booker Hays",
      "gender": "male",
      "company": "FRENEX",
      "email": "bookerhays@frenex.com",
      "phone": "+1 (851) 437-2326",
      "address": "766 Otsego Street, Abrams, Marshall Islands, 6868"
    },
    {
      "name": "Charity Osborne",
      "gender": "female",
      "company": "LETPRO",
      "email": "charityosborne@letpro.com",
      "phone": "+1 (963) 418-3992",
      "address": "608 Cyrus Avenue, Hayes, North Dakota, 4000"
    },
    {
      "name": "White Hewitt",
      "gender": "male",
      "company": "MIXERS",
      "email": "whitehewitt@mixers.com",
      "phone": "+1 (995) 528-3155",
      "address": "241 Mersereau Court, Homeland, Ohio, 6002"
    }
  ]
//this route create information about a product
router.post('/',(req,res)=>{
    const body=req.body
    const product={
        name:body.name,
        surname:body.surname,
        age:body.age
    }
    res.status(200).json({
        message:"creating was successful",
        data_created:product

    })
}); 
//this route getList information about products
router.get('/',(req,res,next)=>{
     
    res.status(200).json({
        message:"this is a getList service",
        results:all_data

    })
});

//this route get ID information about a single product
router.get('/:productId',(req,res,next)=>{
    var id =req.params.productId
    
    res.status(200).json({
        message:"this is a getList service"+id

    })
});

//this route update the information about a single product using the path methdd
router.put('/:productId',(req,res,next)=>{
    var id =req.params.productId
    
    res.status(200).json({
        message:"update successful",
        result:{id:id}
    })
});
router.delete('/:id',(req,res,next)=>{
    var id =req.params.id
    
    res.status(200).json({
        message:"detele successful",
        result:{id:id}
    })
});



module.exports=router;
