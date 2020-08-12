'use strict';
new Chartist.Line('.ct-chart1', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});

var times = function(n) {
  return Array.apply(null, new Array(n));
};

var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
  data.labels.push(index + 1);
  data.series.forEach(function(series) {
    series.push(Math.random() * 100)
  });

  return data;
}, {
  labels: [],
  series: times(4).map(function() {
    return new Array()
  })
});

var options = {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 13 === 0 ? 'W' + value : null;
    }
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 4 === 0 ? 'W' + value : null;
      }
    }
  }]
];

new Chartist.Line('.ct-chart2', data, options, responsiveOptions);

new Chartist.Line('.ct-chart3', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [5, 9, 7, 8, 5, 3, 5, 4]
  ]
}, {
  low: 0,
  showArea: true
});

new Chartist.Line('.ct-chart4', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -2.5, -1, -2, -1],
    [0, 0, 0, 1, 2, 2.5, 2, 1],
    [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
  ]
}, {
  high: 3,
  low: -3,
  showArea: true,
  showLine: false,
  showPoint: false,
  fullWidth: true,
  axisX: {
    showLabel: false,
    showGrid: false
  }
});

var chart = new Chartist.Line('.ct-chart5', {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  series: [
    [1, 5, 2, 5, 4, 3],
    [2, 3, 4, 8, 1, 2],
    [5, 4, 3, 2, 1, 0.5]
  ]
}, {
  low: 0,
  showArea: true,
  showPoint: false,
  fullWidth: true
});

chart.on('draw', function(data) {
  if (data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
  ]
};

var options = {
  seriesBarDistance: 10
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function(value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart6', data, options, responsiveOptions);

new Chartist.Bar('.ct-chart7', {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  series: [
    [800000, 1200000, 1400000, 1300000],
    [200000, 400000, 500000, 300000],
    [100000, 200000, 400000, 600000]
  ]
}, {
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value / 1000) + 'k';
    }
  }
}).on('draw', function(data) {
  if (data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});
new Chartist.Bar('.ct-chart8', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  series: [
    [5, 4, 3, 7, 5, 10, 3],
    [3, 2, 9, 5, 4, 6, 4]
  ]
}, {
  seriesBarDistance: 10,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  }
});
var data = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie('.ct-chart9', data, options, responsiveOptions);

var chart = new Chartist.Pie('.ct-chart10', {
  series: [10, 20, 50, 20, 5, 50, 15],
  labels: [1, 2, 3, 4, 5, 6, 7]
}, {
  donut: true,
  showLabel: false
});

chart.on('draw', function(data) {
  if (data.type === 'slice') {
    // Get the total path length in order to use for dash array animation
    var pathLength = data.element._node.getTotalLength();

    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Create animation definition while also assigning an ID to the animation for later sync usage
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: 1000,
        from: -pathLength + 'px',
        to: '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
        fill: 'freeze'
      }
    };

    // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
    if (data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }

    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // We can't use guided mode as the animations need to rely on setting begin manually
    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data.element.animate(animationDefinition, false);
  }
});

// For the sake of the example we update the chart every time it's created with a delay of 8 seconds
chart.on('created', function() {
  if (window.__anim21278907124) {
    clearTimeout(window.__anim21278907124);
    window.__anim21278907124 = null;
  }
  window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
});

new Chartist.Pie('.ct-chart11', {
  series: [20, 10, 30, 40]
}, {
  donut: true,
  donutWidth: 60,
  donutSolid: true,
  startAngle: 270,
  total: 200,
  showLabel: true
});

new Chartist.Pie('.ct-chart12', {
  series: [20, 10, 30, 40]
}, {
  donut: true,
  donutWidth: 60,
  donutSolid: true,
  startAngle: 270,
  showLabel: true
});
