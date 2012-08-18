$(function(){
    $('.move').hover(
        function(){
            $(this).css('background-color', '#000').css('color', '#fff');
        },
        function(){
            $(this).css('background-color', '#fff').css('color', '#000');
        }
    );
});
$(function() {
    $('#mover').sortable({
        beforeStop: function(event, ui) {
            console.log(ui);
            var item = $(ui.item[0]);
            var offset = ui.offset;
            offset.position = "absolute";
            item.css(offset);
        }
    });
    $( "#sortable" ).disableSelection();
});
