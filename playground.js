$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?q=brunch&lat=39.7392&lon=-104.9903&apikey=527733933cfc51b0f78491172626a1a3",
    method: "POST",
}).then(function(response) {
    console.log(response);
  });

  $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
      method: "GET"
  }).then(function(response) {
      console.log(response);
  });






//   Zomato API 527733933cfc51b0f78491172626a1a3