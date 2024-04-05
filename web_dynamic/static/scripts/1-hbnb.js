$(document).ready(function() {
  console.log('amenities');
  let $checkboxes = $(".amenities input[type='checkbox']");
  let checked_amenities = [];
  
  $checkboxes.on('change, function() {
    amenity_id = $(this).data('id');
    amenity_name = $(this).data('name');

    if ($(this).is(':checked')) {
      checked_amenities.push({
        'id': amenity_id,
        'name': amenity_name
    });
  }else {
    checked_amenities = checked_amenities.filter(function(amenity) {
      return amenity.id != amenity_id;
});
 });
});
