
$( document ).ready(function() {
    var red_status='<center><img src="icons_maps/red.png" width="20" height="20"></center>'
    var green_status='<center><img src="icons_maps/green.png" width="20" height="20"></center>'
     
    var html_=`<div class="panel-group" id="all-data-table" role="tablist" aria-multiselectable="true">
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="heading-all-data-table">
        <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#all-data-table" href="#collapse-all-data-table" aria-expanded="true" aria-controls="collapse-all-data-table">
           <button type="button" class="btn btn-success">Daily Stats</button>
          </a>
        </h4>
      </div>
      <div id="collapse-all-data-table" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-all-data-table">
        <div class="panel-body">
             <table id="example" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
          <thead>
              <tr>
                  <th>Device ID</th>
                  <th>Device name</th>
                  <th>Address</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Date</th>
              </tr>
          </thead>
    
          <tbody id='all_d'>
          </tbody>
          </table>
          </div>
          </div>
          </div>
          </div>`
$("#table_query").append(html_) 

   var api_url = 'http://localhost:3000/api/device/';
       $.ajax({
       url: api_url,
       type: "GET",
       dataType: 'json', 
       async: true,
       success: function(results){
          // console.log(" ~~~~~~~~~~~~~~~>>>>>>>>>>>>>>>>>>>>>>>>.....: "+JSON.stringify(results))
           if(results){
            for (i=0 ;i<results.length;i++){
                var all_data=results[i]
                console.log(all_data)

                html__=`
                <tr><td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>${red_status}</td>
                <td>2011/04/25</td>
                </tr>`
                $("#all_d").append(html__)
            }
           }
           
          
           
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("weather Sno----------------------------");
          }
        })

})