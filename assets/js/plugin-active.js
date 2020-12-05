//  animate plugin active
new WOW().init();

// isotop

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: function (element) {
      return $(element).text();
    }
  }
});

$('.filter button').on("click", function () {
  var value = $(this).attr('data-name');
    $grid.isotope({
      filter: value
    });
  $('.filter button').removeClass('filter-active');
  $(this).addClass('filter-active');
})
