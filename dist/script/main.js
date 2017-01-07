$(document).ready(function(){

    /* BODY CLICK */
    $('body').on('click', function (e) {
        var classForBody = ".btn-burger";

        if (!$(e.target).closest(classForBody).length) {
            $('.btn-burger').removeClass("active");
        }
    });


    /* BTN BURGER */
    $(".btn-burger").on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass("active");
    });
});