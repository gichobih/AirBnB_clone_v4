$(document).ready(function () {
    let selectedAmenities = {};

    $('input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            selectedAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete selectedAmenities[$(this).attr('data-id')];
        }

        // Update the h4 tag inside the div Amenities
        let amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});

