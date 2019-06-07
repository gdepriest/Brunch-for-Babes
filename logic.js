$("#submit").on("click", function(event) {
    event.preventDefault();

    var zipCode = $("#zip").val().trim();
    var pricePoint = $("#pricePoint").val();

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
        
        
            var restaurants = response.restaurants;
            // console.log(restaurants)

            const filteredRatings = restaurants.filter(restaurant => restaurant.restaurant.user_rating.aggregate_rating > 4.2);
            console.log("filtered-ratings" , filteredRatings);

            const filteredPriceLow = restaurants.filter(restaurant => restaurant.restaurant.price_range === 1);
            console.log("price-range 1: " , filteredPriceLow)

            const filteredPriceMid = restaurants.filter(restaurant => restaurant.restaurant.price_range === 2 || restaurant.restaurant.price_range === 3);
            console.log("price-range 2: " , filteredPriceMid);

            const filteredPriceHigh = restaurants.filter(restaurant => restaurant.restaurant.price_range === 4 || restaurant.restaurant.price_range === 5);
            console.log("price-range 3: " , filteredPriceHigh);

            //set variable for name for search purposes in google - do I need a for loop?



            //ajax call to google for map!
        
        
            for (var i=0; i<restaurants.length; i++) {
                
                function initMap() {

                    // var restName= restaurants[i].restaurant.name;
                    var restLat= restaurants[i].restaurant.location.latitude;
                    var restLng = restaurants[i].restaurant.location.longitude;

                    var myLatLng = restLat + restLng

                    var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 4,
                      center: myLatLng
                    });
            
                    var marker = new google.maps.Marker({
                      position: myLatLng,
                      map: map,
                      title: 'Hello World!'
                    });
            


                
                
                // ratingsArray.push(restaurants[i].restaurant.user_rating.aggregate_rating);
                // console.log(ratingsArray);
        
                // priceArray.push(restaurants[i].restaurant.price_range);
                // console.log(priceArray);
        
        
                
                // var restDiv = $("<div>").addClass("restDiv")
        
                // var restName = $("<h4>").text(restaurants[i].restaurant.name);
                // var rating = $("<p>").text("Rating: " + restaurants[i].restaurant.user_rating.aggregate_rating);
                // var image = $("<img>").attr('r1Img', restaurants[i].restaurant.thumb);
                // // r1Img 
        
                // restDiv.append(restName);
                // restDiv.append(rating);
                // restDiv.append(image);
        
                // $("#contentHere").append(restDiv);
            // }
           

        });
        //
    });

})

