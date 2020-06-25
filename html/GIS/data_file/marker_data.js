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
var a = function(callback)
{
    

     var cities=['lubumbashi','pretoria','johannesburg','cape town','durban'];
     //var cities=['lubumbashi'];
     var all_cities= '';
     for(i=0;i<cities.length;i++){
        
        var city=cities[i];
        var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=847dd7d4f3281970db62a2928b0be868';
        $.ajax({
            url: api_url,
              dataType: 'json',
            async: false,
            success: callback
          }); 
    }
       
};


a(function(data) {
    //console.log(data);
    //alert(JSON.stringify(data));
    markers.push(data)
});
      




console.log(markers)
    
   