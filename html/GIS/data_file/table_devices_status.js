
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
    <table id="example" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" style="width:100%">
    <thead>
        <tr>
            <th>device_id</th>
            <th>device_name</th>
            <th>device_address</th>
            <th>region</th>
            <th>town</th>
            <th>lattiude</th>
            <th>longitude</th>
            <th>record_date</th>
            <th>status</th>
        </tr>
      </thead>
  </table>
   </div>
  </div>
</div>
</div>`
$("#table_query").append(html_)