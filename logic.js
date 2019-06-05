var lat = '';
var lng = '';

$("#submit").on("click", function(event) {
    event.preventDefault();

    var zipCode = $("#zip").val().trim();

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
        method: "GET"
    }).then(function(response) {
        // console.log(response);
        
        // console.log(response.results[0].geometry.location.lat);
        // console.log(response.results[0].geometry.location.lng);
        //set lat and long (response.......)
        var lat = response.results[0].geometry.location.lat;
        var lng = response.results[0].geometry.location.lng;

        console.log(lat + ", " + lng)
        //ajax call to the zomato api, plugging in values fo lat and long

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?q=brunch&lat=" + lat + "&lon=" + lng + "&apikey=527733933cfc51b0f78491172626a1a3&count=all",
            method: "POST",
        }).then(function(response) {
            
            // console.log(response);    
            // console.log(response.restaurants);
        
            var restaurants = response.restaurants;
            console.log(restaurants)
        
            // var ratingsArray = [];
            // var priceArray = [];
            // var lowPriceArray = [];
            // var midPriceArray = [];
            // var highPriceArray = [];
        
        
        
            // for (var i=0; i<restaurants.length; i++) {
                // var ratingsArray = [];
                
                
                // ratingsArray.push(restaurants[i].restaurant.user_rating.aggregate_rating);
                // console.log(ratingsArray);
        
                // priceArray.push(restaurants[i].restaurant.price_range);
                // console.log(priceArray);
        
                // if (restaurants[i].restaurant.price_range === 1) {
                //     lowPriceArray.push(restaurants[i]);
                //     console.log(lowPriceArray);
                // }else if (restaurants[i].restaurant.price_range === 2 || restaurants[i].restaurant.price_range === 3) {
                //     midPriceArray.push(restaurants[i]);
                //     console.log(midPriceArray);
                // }else {
                //     highPriceArray.push(restaurants[i]);
                //     console.log(highPriceArray);
                // }
        
                
                // var restDiv = $("<div>").addClass("restDiv")
        
                // var restName = $("<h4>").text(restaurants[i].restaurant.name);
                // var rating = $("<p>").text("Rating: " + restaurants[i].restaurant.user_rating.aggregate_rating);
                // var image = $("<img>").attr('src', restaurants[i].restaurant.thumb);
        
                // restDiv.append(restName);
                // restDiv.append(rating);
                // restDiv.append(image);
        
                // $("#contentHere").append(restDiv);
            // }
           
            // const filteredRatings = restaurants.filter(restaurant => restaurant.restaurant.user_rating.aggregate_rating > 4.3);
            // console.log("array" , filteredRatings);
            // // console.log(filteredRatings);
        
            // const filteredPrice = priceArray.filter(number => number < 2);
            // console.log(filteredPrice);
        
        
            
        
            
            // console.log(response.restaurants[0].restaurant.user_rating.aggregate_rating);
        });
        //
    });

})

//apply a filter

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