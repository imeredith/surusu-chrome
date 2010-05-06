var form = $('form[action=answer.php]');
$(document).keypress(function(e){
    if(e.which == 32){
        form.submit();
    }
});