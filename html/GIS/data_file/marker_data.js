
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
console.log("device");


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
        status_img=data.imageUrl
        device_data.coords={lat: device_lat, lng: device_lng}
        if (device_status=='0'){
           device_data.iconImage='icons_maps/power_off.png'
        } else if (device_status=='1'){
          device_data.iconImage='icons_maps/power_on.png'
       }else if (device_status=='2'){
          device_data.iconImage='icons_maps/maintenance.png'
        }else{
          device_data.iconImage='icons_maps/pending_instalation.png'
        }
        device_data.content=`<h5>Device Id: ${device_id}</h5>
                             <h5>Region: ${data.region}</h5>
                             <h5>Status: ${device_status}</h5>
                             <h5>Status icon : ${status_img}</h5>`
         
         //c00000000000000000000sonsole.log('))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))00'+JSON.stringify(device_data))
        markers.push(device_data) 
      }

    }

}

);})
      
var markers = [
  
];
    
   