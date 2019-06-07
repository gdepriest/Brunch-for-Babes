

var lat = '';
var lng = '';


$("#submit").on("click", function(event) {
    event.preventDefault();

    


    var zipCode = $("#zip").val().trim();

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
        method: "GET"
    }).then(function(response) {
        console.log(response);
        //set lat and long (response.......)
        //ajax call to the zomato api, plugging in values fo lat and long
        //
    });



})

// $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7392,-104.9903&radius=5&types=food&name=harbour&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
//     method: "GET"
// }).then(function(response) {
//     console.log(response);



// });



    // geocoder.geocode( { 'address': address}, function(results, status) {
    //   if (status == google.maps.GeocoderStatus.OK) {
    //      lat = results[0].geometry.location.lat();
    //      lng = results[0].geometry.location.lng();
    //     });
    //   } else {
    //     alert("Geocode was not successful for the following reason: " + status);
    //   }}
    
    // alert('Latitude: ' + lat + ' Logitude: ' + lng);