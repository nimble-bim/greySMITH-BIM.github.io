(function () {

    hoverOnContact();

    function hoverOnContact() {

        $('#contact')
            .hover(
                function() {
                    $(this)
                        .fadeOut(500,
                            function() {
                                $(this).text('info@grey-smith.com').fadeIn(250);
                            });
                },
                function() {
                    $(this)
                        .fadeOut(500,
                            function() {
                                $(this).text('Contact Us.').fadeIn(150);
                            }
                        );
                });
    }

    $("#page-enter")
    .click(
        function () {
            $("#head").
            animate({

            },
            500);
        });


})();