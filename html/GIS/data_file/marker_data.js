
$( document ).ready(function() {
var a = function(callback)
{       
        var api_url = 'http://localhost:3000/api/device/';
        $.ajax({
             url:api_url,
             headers: { 'Authorization': 'Bearer '+localStorage.SapionT },
             dataType: 'json',
            async: false,
            success: callback
          });
       
};


a(function(results) {
    if (results&&results.data){

      var data_all=results.data
      for(i=0;i<data_all.length;i++){
        var data=data_all[i]
        device_data={};
        device_lat=data.lattiude*1
        device_lng=data.longitude*1
        device_id=data.device_id
        device_status=data.device_status
        device_data.coords={lat: device_lat, lng: device_lng}
        device_data.content=`<h5>Device: ${device_id}</h5>
                              <h5>Status: ${data.region}</h5>`
         device_data.iconImage='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
         
         console.log('))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))00'+JSON.stringify(device_data))
         markers.push(device_data) 
      }

    }

});})
      




console.log(markers)





var lat='£'
var markers = [
  
];
    
   