'use strict';
$(function() {
  'use strict';

  var randomScalingFactor = function() {
    return Math.round(Math.random() * 100)
  };
  var lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: '#C2B6D6',
        borderColor: '#C2B6D6',
        pointBackgroundColor: '#d2c5e8',
        pointBorderColor: '#d2c5e8',
        pointHoverBorderWidth: 2,
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      },
      {
        label: 'My Second dataset',
        backgroundColor: '#67537A',
        borderColor: '#67537A',
        pointBackgroundColor: '#453852',
        pointBorderColor: '#453852',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }
    ]
  }

  var ctx = document.getElementById('canvas-1');
  var chart = new Chart(ctx, {
    type: 'line',
    data: lineChartData,
    options: {
      responsive: true
    }
  });


  var randomScalingFactor = function() {
    return Math.round(Math.random() * 100)
  };
  var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        backgroundColor: 'rgba(198, 240, 218, 0.8)',
        borderColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      },
      {
        backgroundColor: 'rgba(54, 196, 208, 0.8)',
        borderColor: 'rgba(151,187,205,0.8)',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }
    ]
  }
  var ctx = document.getElementById('canvas-2');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true
    }
  });


  var doughnutData = {
    labels: [
      'Dark Pink',
      'Light Pink',
      'Blue'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(230, 69, 169, 0.5)',
        'rgba(240, 72, 176, 0.5)',
        'rgba(48, 198, 233, 0.5)'
      ],
      hoverBackgroundColor: [
        'rgba(230, 69, 169, 0.9)',
        'rgba(240, 72, 176, 0.9)',
        'rgba(48, 198, 233, 0.9)'
      ]
    }]
  };
  var ctx = document.getElementById('canvas-3');
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: doughnutData,
    options: {
      responsive: true
    }
  });


  var radarChartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(73, 188, 244, 0.7)',
        borderColor: '#49BCF4',
        pointBackgroundColor: 'rgba(244, 255, 224, 0.2)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(230, 72, 186, 0.5)',
        borderColor: '#E648BA',
        pointBackgroundColor: 'rgba(183, 239, 156, 0.8)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };
  var ctx = document.getElementById('canvas-4');
  var chart = new Chart(ctx, {
    type: 'radar',
    data: radarChartData,
    options: {
      responsive: true
    }
  });


  var pieData = {
    labels: [
      'Green',
      'Yellow',
      'Red'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(204, 223, 204, 0.5)',
        'rgba(255, 244, 87, 0.5)',
        'rgba(243, 138, 138, 0.5);'
      ],
      hoverBackgroundColor: [
        '#CCDFCC',
        'rgba(255, 244, 87, 1)',
        '#F38A8A'
      ]
    }]
  };
  var ctx = document.getElementById('canvas-5');
  var chart = new Chart(ctx, {
    type: 'pie',
    data: pieData,
    options: {
      responsive: true
    }
  });


  var polarData = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        '#FC575E',
        '#66CC99',
        'rgba(255, 244, 87, 1)',
        '#E7E9ED',
        '#44BBFF'
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ]
  };
  var ctx = document.getElementById('canvas-6');
  var chart = new Chart(ctx, {
    type: 'polarArea',
    data: polarData,
    options: {
      responsive: true
    }
  });
});
