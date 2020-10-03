$(function() {
    $('#typo')
    .on('mouseover', function() {
        $(this)stop(true).animate({
            'background-color': `#ae5e9e`
        }, 
        500
        );
    })
    .on('mouseout', function() {
        $('#typo').animate({
            'background-color': `#3498db`
        }, 
        500
        ); 
    });
});
