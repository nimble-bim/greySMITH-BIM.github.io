(function () {

    $(document).ready(function () {
        //var nav = $('#menu');
        //if (!nav.length)
        //    console.log('faiiling?');

        //console.log(nav);

        $('#menu').affix({
            offset: {
                top: 900
            }
        });

        console.log($);
        //console.log($('#menu'));
        //console.log($('body').affix());
        
    });

})();

//(function() {
//    $(document)
//        .ready(function () {
//            var nav = $('#menu');

//            $('#menu')
//                .affix({
//                    offset: {
//                        top: 900
//                    }
//                });
//        });
//})();

