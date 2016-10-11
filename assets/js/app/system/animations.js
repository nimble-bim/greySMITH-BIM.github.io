(function () {

    $("#page-enter")
        .click(
            function() {
                $("#head").
                animate({

                },
                500);
            });

    $('#contact')
        .hover(
            function() {
                $(this).fadeOut(500,
                function() {
                    $(this).text('info@greysmith.com').fadeIn(250);});
            },
            function() {
                $(this).fadeOut(500,
                    function() {
                        $(this).text('Contact Us.').fadeIn(150);
                    }
            )});
    console.log($);

})();