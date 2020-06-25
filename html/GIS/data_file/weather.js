
var a = function(callback)
{
    

     var cities=['lubumbashi','kinshasa','pretoria','johannesburg','cape town','durban','maputo','mossel bay'];
     
     var all_cities= '';
     for(i=0;i<cities.length;i++){
        
        var city=cities[i];
        var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=847dd7d4f3281970db62a2928b0be868';
        $.ajax({
            url: api_url,
              dataType: 'jsonp',
            async: false,
            success: callback
          }); 
    }
       
};


a(function(data) {
   // console.log(data)
   weather_data={};
   lat_w=data.coord.lat
   lng_w=data.coord.lon
   name=data.name
   icon=data.weather[0].icon
   status=data.weather[0].main
   description=data.weather[0].description
   weather_data.coords={lat: lat_w, lng: lng_w}
   weather_data.content=`<h5>City: ${name}</h5>
                         <h5>Status: ${status}</h5>
                         <h5>Desc: ${description}</h5>`
   weather_data.iconImage=`http://openweathermap.org/img/wn/${icon}@2x.png`
    markers.push(weather_data)
});
//console.log(markers)