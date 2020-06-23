$( document ).ready(function() {
     var cities=['lubumbashi','pretoria','johannesburg','cape town'];
     all_cities=[]
     
     for(i=0;i<cities.length;i++){
        var city=cities[i];
        var api_url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=847dd7d4f3281970db62a2928b0be868';
        $.ajax({
        url: api_url,
        type: "GET",
        dataType: 'jsonp',
        async: false,
        success: function(results){
            console.log(" results: "+JSON.stringify(results.coord))
            all_cities.push(JSON.stringify(results.coord))
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
     alert("weather Sno----------------------------");
  }
        
  });
  console.log(" all_cities: "+all_cities)
    }
    

    

})

