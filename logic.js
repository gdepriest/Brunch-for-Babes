const firebaseConfig = {
    apiKey: "AIzaSyDYD0jQpnJMUGnRegSxbWmtPwnmVxB0AK8",
    authDomain: "bootcampproject-acf6e.firebaseapp.com",
    databaseURL: "https://bootcampproject-acf6e.firebaseio.com",
    projectId: "bootcampproject-acf6e",
    storageBucket: "bootcampproject-acf6e.appspot.com",
    messagingSenderId: "303278467329",
    appId: "1:303278467329:web:317676de3cdd17f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#submit").on("click", function (event) {
    event.preventDefault();
    var zipCode = $("#zip").val().trim();
    var pricePoint = $("#pricePoint").val().trim();

    var newUser = {
        zip: zipCode,
        pPoint: pricePoint,
    }

    database.ref().push(newUser);



    $("#zip").val("");

})
