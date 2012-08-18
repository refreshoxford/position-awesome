$(function() {
    // Add jQuery-ui sortable.
    $('#mover').sortable({
        // Before removing the placeholder/helper, capture the offset and apply
        // it to the element.
        beforeStop: function(event, ui) {
            var item = $(ui.item[0]);
            var offset = ui.offset; //This contains positional values as props
            // Adds absolute positioning
            offset.position = "absolute";
            // Apply the offset style and add our own status class.
            item.css(offset).addClass('hasmoved');
        }
    });
    // This disables selection. Whodathunkit?
    $( "#mover" ).disableSelection();
});
