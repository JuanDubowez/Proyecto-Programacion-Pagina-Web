
$('.carousel.carousel-slider').carousel({fullWidth: true});
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4800);
}
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});


(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

var database = firebase.database();

function tomarDatos() {
    name = document.getElementById("name").value;
    mail = document.getElementById("email").value;
    message = document.getElementById("message").value;
    var info= {
        nombre: name,
        email: mail,
        mensaje: message
    }
    var messages = firebase.database().ref("messages");
    messages.push(info);
    $("#success").css("display","block");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    $(document).ready(function() {
    setTimeout(function() {
        $("#success").fadeOut(1000);
    },1500);
});
    
}


