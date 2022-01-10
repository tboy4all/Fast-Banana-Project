$(document).ready(function () {
  // init Isotope
  var $grid = $('.picture-container').isotope({
    // options
  })
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter')
    $grid.isotope({ filter: filterValue })
  })

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout')
  })
})
