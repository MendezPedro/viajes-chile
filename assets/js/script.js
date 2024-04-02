// Ocultar tarjetas
$(".hide-1").click(function(event) { // selecciona la clase hide-1
    $(".text-1").toggle('slow'); // oculta o muestra la clase text-1
});
$(".hide-2").click(function(event) { // selecciona la clase hide-2
    $(".text-2").toggle('slow'); // oculta o muestra la clase text-2
});
$(".hide-3").click(function(event) { // selecciona la clase hide-3
    $(".text-3").toggle('slow'); // oculta o muestra la clase text-3
});
$(".hide-4").click(function(event) { // selecciona la clase hide-3
    $(".text-4").toggle('slow'); // oculta o muestra la clase text-3
});

// color negro al bajar el scroll
$(document).scroll( function(e){
    const y = $("html").scrollTop();
    if (y > 500) {
        $("nav").addClass("nav-black");
    } else {
        $("nav").removeClass("nav-black");
    }
});

// aplica smoothScroll
$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
   
    window.location.hash = hash;
    });
    }
    });
   });

// alert al enviar correo
$("#enviarCorreo").click(function(){
    alert('El correo fue enviado correctamente...');
});