$(document).ready(function () {
    var audio = new Audio ("audio/shooting-star.mp3");

    $("#button").on("click", function() {
        event.preventDefault();
        audio.play();
        console.log("Audio should play");
    })
})
