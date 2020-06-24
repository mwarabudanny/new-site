
$( document ).ready(function() {
    var html=`
<div class="table-services">
	<div style="width: 600px">
	<table>
		<colgroup>
		<col width="100%">
		</colgroup>
		<thead>
		<tr>
		<th>Header</th>
		<th>status</th>
		<th>TL name</th>
		<th>TL number</th>
		</tr>
		</thead>
		<tbody>
			<tr>
			<td>item</td>
			<td>item</td>
			<td>item</td>
			<td>item</td>
			</tr>
			<tr>
				<td>item</td>
				<td>item</td>
				<td>item</td>
				<td>item</td>
			</tr>
			<tr>
				<td>item</td>
				<td>item</td>
				<td>item</td>
				<td>item</td>
			</tr>
			<tr>
				<td>item</td>
				<td>item</td>
				<td>item</td>
				<td>item</td>
			</tr>
			<tr>
				<td>item</td>
				<td>item</td>
				<td>item</td>
				<td>item</td>
			</tr>
		</tbody>
	</table>
	</div>
</div>`
$(".table_d").append(html)
})