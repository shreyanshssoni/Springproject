'use strict';
var data = [{
      y: '2014',
      a: 50,
      b: 90
    },
    {
      y: '2015',
      a: 65,
      b: 75
    },
    {
      y: '2016',
      a: 50,
      b: 50
    },
    {
      y: '2017',
      a: 75,
      b: 60
    },
    {
      y: '2018',
      a: 80,
      b: 65
    },
    {
      y: '2019',
      a: 90,
      b: 70
    },
    {
      y: '2020',
      a: 100,
      b: 75
    },
    {
      y: '2021',
      a: 115,
      b: 75
    },
    {
      y: '2022',
      a: 120,
      b: 85
    },
    {
      y: '2023',
      a: 145,
      b: 85
    },
    {
      y: '2024',
      a: 160,
      b: 95
    }
  ],
  config = {
    data: data,
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Total Income', 'Total Outcome'],
    fillOpacity: 0.6,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors: ['#f6f6f6'],
    pointStrokeColors: ['black'],
    lineColors: ['#91CED7', '#59AE7F'],
    barColors: ['#F6CD61', '#FE8A71']
  };
Morris.Area({
  element: "area-chart",
  data: [{
    year: "2000",
    product1: 0,
    product2: 0,
    product3: 0

  }, {
    year: "2001",
    product1: 100,
    product2: 300,
    product3: 200
  }, {
    year: "2002",
    product1: 120,
    product2: 30,
    product3: 40
  }, {
    year: "2003",
    product1: 140,
    product2: 200,
    product3: 299
  }, {
    year: "2004",
    product1: 130,
    product2: 160,
    product3: 30
  }, {
    year: "2005",
    product1: 300,
    product2: 100,
    product3: 30

  }, {
    year: "2006",
    product1: 230,
    product2: 188,
    product3: 60
  }],
  xkey: "year",
  ykeys: ["product1", "product2", "product3"],
  labels: ["product1", "product2", "product3"],
  behaveLikeLine: !0,
  ymax: 300,
  resize: !0,
  pointSize: 0,
  pointStrokeColors: ["#000", "#5175E0", "#BABFC7"],
  smooth: !0,
  gridLineColor: "#e3e3e3",
  numLines: 6,
  gridtextSize: 14,
  lineWidth: 0,
  fillOpacity: .8,
  hideHover: "auto",
  lineColors: ["#85C1E9", "#3498DB", "#1A4C6D"]
});
config.element = 'line-chart';
Morris.Line(config);
config.element = 'bar-chart';
Morris.Bar(config);
config.element = 'stacked';
config.stacked = true;
Morris.Bar(config);
Morris.Donut({
  element: 'pie-chart',
  data: [{
      label: "Friends",
      value: 30
    },
    {
      label: "Allies",
      value: 15
    },
    {
      label: "Enemies",
      value: 45
    },
    {
      label: "Neutral",
      value: 10
    }
  ],
  colors: ['#ED5784', '#AA61CE', "#FFD91E", "#8194BF"],
});
