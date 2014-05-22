( function( $ ) {
    // Determine absolute positioned DIV heights
    $('#handshake').height($('#zrak').height()+150);
    $('#meetme').height($('#handshake').height()+$('#social').height()+170);
    //Set the final height and return the brain to its normal size
    $('#summary').height($('#summary').height()+$('#brain').height()*1.5);

    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //$("#curPos").text(data.curTop);
        }
    });

    //Back to top button
    $('#top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });
} )(jQuery);