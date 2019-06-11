$(document).ready(function () {
    var tabla = $('#myTable');
    tabla.hide();
    tabla.DataTable().clear();
    tabla.DataTable().destroy();
    var mydata = [{ 'name': 'locos', 'numero': 90 }, { 'name': 'lucas', 'numero': '98' }];
    tabla.DataTable(
        {
            responsive:true,
            data: mydata,
            columns: [{ 'data': 'name' }, { 'data': 'numero' }]
        }
    ).draw();
    tabla.show();
})