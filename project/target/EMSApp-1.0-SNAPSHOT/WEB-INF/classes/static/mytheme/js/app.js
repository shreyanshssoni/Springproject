/*****
 * CONFIGURATION
 */

//Main navigation
$.navigation = $('nav > ul.nav');


$.panelIconOpened = 'chevron-down';
$.panelIconClosed = 'chevron-right';


//Default colors
$.brandPrimary = '#20a8d8';
$.brandSuccess = '#4dbd74';
$.brandInfo = '#63c2de';
$.brandWarning = '#f8cb00';
$.brandDanger = '#f86c6b';

$.grayDark = '#2a2c36';
$.gray = '#55595c';
$.grayLight = '#818a91';
$.grayLighter = '#d1d4d7';
$.grayLightest = '#f8f9fa';



'use strict';

/****
 * MAIN NAVIGATION
 */

$(document).ready(function($) {

  // Add class .active to current link
  $.navigation.find('a').each(function() {

    var cUrl = String(window.location).split('?')[0];

    if (cUrl.substr(cUrl.length - 1) == '#') {
      cUrl = cUrl.slice(0, -1);
    }

    if ($($(this))[0].href == cUrl) {
      $(this).addClass('active');

      $(this).parents('ul').add(this).each(function() {
        $(this).parent().addClass('open');
      });
    }
  });

  // Dropdown Menu
  $.navigation.on('click', 'a', function(e) {

    if ($.ajaxLoad) {
      e.preventDefault();
    }

    if ($(this).hasClass('nav-dropdown-toggle')) {
      $(this).parent().toggleClass('open');
      resizeBroadcast();
    }

  });

  function resizeBroadcast() {

    var timesRun = 0;
    var interval = setInterval(function() {
      timesRun += 1;
      if (timesRun === 1) {
        clearInterval(interval);
      }
      window.dispatchEvent(new Event('resize'));
    }, 62.5);
  }

  /* ---------- Color theme switcher ---------- */
  (function($change) {
    switch_style = {
      ready: function() {
        this.switch_style_click();
      },

      switch_style_click: function() {
        $(".box_mini").on('click', function() {
          var id = $(this).attr("id");
          $("body").attr("class", "app " + id);
        });
      },
    };

    $change().ready(function() {
      switch_style.ready();
    });
  })(jQuery);


  /* ---------- Main Menu Open/Close, Min/Full ---------- */
  $('.navbar-toggler').on('click', function() {

    if ($(this).hasClass('sidebar-toggler')) {
      $('body').toggleClass('sidebar-hidden');
      resizeBroadcast();
    }

    if ($(this).hasClass('sidebar-minimizer')) {
      $('body').toggleClass('sidebar-minimized');
      resizeBroadcast();
    }

    if ($(this).hasClass('aside-menu-toggler')) {
      $('body').toggleClass('aside-menu-hidden');
      resizeBroadcast();
    }

    if ($(this).hasClass('mobile-sidebar-toggler')) {
      $('body').toggleClass('sidebar-mobile-show');
      resizeBroadcast();
    }

  });

  /* ---------- Fullscreen animation toggle ---------- */
  $('.generate').on('click', function() {
    $(document).toggleFullScreen();
    $(".container-fluid").fullScreen(true);
  });

  /* ---------- Off and Hide toggles ---------- */
  $('.switch-input').on('click', function() {

    if ($(this).hasClass('opacity')) {
      $('.on').toggleClass('hide');
      resizeBroadcast();
    }
  });

  $('.switch-input').on('click', function() {

    if ($(this).hasClass('hide')) {
      $('.hidden').toggleClass('fade');
      resizeBroadcast();
    }
  });

  /* ---------- Refresh animation toggle ---------- */
  $('.fa').on('click', function() {

    if ($(this).hasClass('fa-refresh')) {
      $('.loader').toggleClass('loading bullet');
      resizeBroadcast();
    }

    if ($(this).hasClass('fa-refresh')) {
      $('.fa-refresh').toggleClass('fa-spin');
      resizeBroadcast();
    }

    setTimeout(function() {
      $('.fa-refresh').removeClass('fa-spin');
      $('.loader').removeClass('loading bullet');
      resizeBroadcast();
    }, 4000);


  });

  /* ---------- Breadcrumb sidebar toggle ---------- */
  $('.btn').on('click', function() {

    if ($(this).hasClass('bread')) {
      $('body').toggleClass('aside-menu-hidden');
      resizeBroadcast();
    }
  });

  /* ---------- Aside menu settings / Close, Min/Full custom ---------- */
  $('.sidebar-close').on('click', function() {

    $('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');
  });


  /* ---------- Disable moving to top ---------- */
  $('a[href="#"][data-top!=true]').on('click', function(e) {
    e.preventDefault();
  });

});

/* ---------- Card Actions ---------- */


$(document).on('click', '.card-actions a', function(e) {
  e.preventDefault();

  if ($(this).hasClass('btn-close')) {
    $(this).parent().parent().parent().fadeOut();
  }

});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function init(url) {

  /* ---------- Tooltip ---------- */
  $('[rel="tooltip"],[data-rel="tooltip"]').tooltip({
    "placement": "bottom",
    delay: {
      show: 400,
      hide: 200
    }
  });

  /* ---------- Popover ---------- */
  $('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();

}
