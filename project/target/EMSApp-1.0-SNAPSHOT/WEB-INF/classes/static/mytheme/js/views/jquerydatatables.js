'use strict';
// Table can order multiple columns
$(document).ready(function() {
  $('#example1').DataTable({
    columnDefs: [{
      targets: [0],
      orderData: [0, 1]
    }, {
      targets: [1],
      orderData: [1, 0]
    }, {
      targets: [4],
      orderData: [4, 0]
    }]
  
  });
  
});

// Striped table
$(document).ready(function() {
  $('#example2').DataTable({
    scrollY: '50vh',
    scrollCollapse: true,
    paging: false
  });
});

// Table saves your place
$(document).ready(function() {
  $('#example3').DataTable({
    stateSave: true
  });
});

// Table displays limited rows per page 3,9,20 or all
$(document).ready(function() {
  $('#example4').DataTable({
    scrollY: '50vh',
    lengthMenu: [
      [3, 9, 20, -1],
      [3, 9, 20, "All"]
    ]
  });
});

// Table is scrollable
$(document).ready(function() {
  $('#example5').DataTable({
    scrollY: '50vh',
    scrollCollapse: true,
    paging: true,
    
  });
});

// Table is scrollable
$(document).ready(function() {
  $('#example6').DataTable({
    scrollY: '50vh',
    scrollCollapse: true,
    paging: false,
    destroy:true
  });
});
