(function () {

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

    $(document).ready(function() {

        //$('#news-list').affix({
        //    offset: {
        //        top: 600,
        //        bottom: function () {
        //            return (this.bottom = $('.footer').outerHeight(true));
        //        }
        //    }
        //});



        $("#page-enter")
            .click(
                function () {
                    $("#head").
                    animate({

                    },
                    500);
                });
    });

    hoverOnContact();
})();