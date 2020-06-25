/* var a = function(callback)
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
    console.log(data);
    alert(JSON.stringify(data));
});
      




 */