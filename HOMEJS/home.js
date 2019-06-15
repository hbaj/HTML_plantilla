$(document).ready(function() {
  var tabla = $("#myTable");
  tabla.hide();
  tabla.DataTable().clear();
  tabla.DataTable().destroy();
  var mydata1 = [{ name: "locos", numero: 90 }, { name: "lucas", numero: "98" }];
 var mydata1= [
    {
      "Country": "Finland",
      "Ladder": 1
    },
    {
      "Country": "Denmark",
      "Ladder": 2
    }
]
  
  tabla
    .DataTable({
      responsive: true,
      //data: mydata,
      ajax: 'data1.json',
    //   ajax: {
    //     url: 'data1.json',
    //     dataSrc: ''
    // },
      columns: [{ 'data': "Country" }, { 'data': "Ladder" }]
    })
    .draw();
  tabla.show();
});

