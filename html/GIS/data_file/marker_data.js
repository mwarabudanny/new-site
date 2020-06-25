
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


      console.log('))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))00'+JSON.stringify(results.data))
      /* device_data={};
   device_lat=data.coord.lat
   device_lng=data.coord.lon
   name=data.name
   icon=data.weather[0].icon
   status=data.weather[0].main
   description=data.weather[0].description
   weather_data.coords={lat: lat_w, lng: lng_w}
   weather_data.content=`<h5>City: ${name}</h5>
                         <h5>Status: ${status}</h5>
                         <h5>Desc: ${description}</h5>`
   weather_data.iconImage=`http://openweathermap.org/img/wn/${icon}@2x.png`
    markers.push(weather_data) */
    }

});})
      




console.log(markers)





var lat='£'
var markers = [
  {
    coords:{lat:-25.740603,lng:28.209105},
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    content:`<h1>${lat} Lynn MA</h1>`
  },
 
  {
    coords:{lat:-24.734534603,lng:27.709105},
    iconImage:'http://openweathermap.org/img/wn/10d@2x.png'
 
  }
];
    
   