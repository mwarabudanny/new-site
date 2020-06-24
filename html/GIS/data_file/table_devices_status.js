
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
              <th>Device name</th>
              <th>Device ID</th>
              <th>Address</th>
              <th>Location</th>
              <th>Status</th>
              <th>Date</th>
          </tr>
      </thead>

      <tbody>
          <tr>
              <td>Tiger</td>
              <td>Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>${red_status}</td>
              <td>2011/04/25</td>
          </tr>
          <tr>
              <td>Garrett</td>
              <td>Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>${red_status}</td>
              <td>2011/07/25</td>
          </tr>
          <tr>
              <td>Ashton</td>
              <td>Cox</td>
              <td>Junior Technical Author</td>
              <td>San Francisco</td>
              <td>${green_status}</td>
              <td>2009/01/12</td>
          </tr>
          <tr>
              <td>Cedric</td>
              <td>Kelly</td>
              <td>Senior Javascript Developer</td>
              <td>Edinburgh</td>
              <td>${red_status}</td>
              <td>2012/03/29</td>
          </tr>
          <tr>
              <td>Airi</td>
              <td>Satou</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>${green_status}</td>
              <td>2008/11/28</td>
          </tr>
          <tr>
              <td>Brielle</td>
              <td>Williamson</td>
              <td>Integration Specialist</td>
              <td>New York</td>
              <td>${green_status}</td>
              <td>2012/12/02</td>
          </tr>
          <tr>
              <td>Herrod</td>
              <td>Chandler</td>
              <td>Sales Assistant</td>
              <td>San Francisco</td>
              <td>${green_status}</td>
              <td>2012/08/06</td>
          </tr>
      </tbody>
  </table>
   </div>
  </div>
</div>
</div>`
$("#table_query").append(html_)