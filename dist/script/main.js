$(document).ready(function(){

    /* BODY CLICK */
    $('body').on('click', function (e) {
        var classForBody = ".btn-burger, .nav";

        if (!$(e.target).closest(classForBody).length) {
            $('.btn-burger').removeClass("active");
            $(".nav").slideUp(300);
        }
    });


    /* BTN BURGER */
    $(".btn-burger").on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass("active");
        $(".nav").slideToggle(300);
    });
});