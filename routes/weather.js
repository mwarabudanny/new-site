const express=require('express');
const jquery=require('jquery');
const router=express.Router(); // this creates the router needed to handle http function(get,post,path,delete)
var $ = jQuery = require('jquery');
//this route getList information about products
router.get('/',(req,res,next)=>{
    var all_cities=[]
     
         //var cities=['lubumbashi','pretoria','johannesburg','cape town','durban'];
         var cities=['lubumbashi'];
         
         for(i=0;i<cities.length;i++){
            var city=cities[i];
            var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=847dd7d4f3281970db62a2928b0be868';
            $.ajax({
            url: api_url,
            type: "GET",
            dataType: 'jsonp', 
            async: true,
            success: function(results){
                console.log(" results: "+JSON.stringify(results))
                var all_data=results
                all_cities.push(all_data)
                
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert("weather Sno----------------------------");
      }
            
      });
        }
        
    
    console.log(" all_cities: "+all_cities)
    
    
    res.status(200).json({
        message:"this is a getList service",
        results:''

    })
});





module.exports=router;
