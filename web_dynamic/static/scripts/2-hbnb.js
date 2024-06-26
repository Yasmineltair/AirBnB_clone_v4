$(document).ready(function() {
    console.log('amenities');
    let $checkboxes = $(".amenities input[type='checkbox']");
    let checked_amenities = [];
    
    $checkboxes.on('change', function() {
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
        }
        $('.amenities h4').empty();
        for (let i = 0; i < checked_amenities.length; i++) {
            if (checked_amenities.length == 1 || i == checked_amenities - 1) {
                $('.amenities h4').append(checked_amenities[i].name);
            }else {
                $('.amenities h4').append('' + checked_amenities[i].name + ', ');
            }
        }
        });
        console.log('2-hbnb');
        $.ajax({
            type: 'GET',
            url: 'http://localhost:5001/api/v1/status/',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                if (data.status === "OK") {
                    $('#api_status').addClass('available');
                } else {
                    $('#api_status').removeClass('available');
                }
                }
        });
    });
