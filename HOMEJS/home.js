$(document).ready(function() {
  var tabla = $("#myTable");
  // tabla.hide();
  // tabla.DataTable().clear();
  // tabla.DataTable().destroy();
  

  tabla
    .DataTable({
      responsive: true,
      //data: mydata,
      ajax: "data2.json",
      //   ajax: {
      //     url: 'data1.json',
      //     dataSrc: ''
      // },

      columns: [
        { data: "Province" },
        { data: "Party" },
        { data: "Age" },
        { data: "Name" },
        { data: "Gender" }
      ]
    })
    .draw();
  tabla.show();


  
//   var utils = $.pivotUtilities;
//   var heatmap = utils.renderers["Heatmap"];
//   var sumOverSum = utils.aggregators["Sum over Sum"];
$.getJSON("data3.json", function(data) {
  $("#output").pivotUI(data, {

  });

});

});
