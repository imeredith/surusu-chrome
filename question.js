var form = $('form[action=answer.php]');
var getNextPage = false;
var nextPageData = null;

$('input[name=showanswer]').click(function (e){
   e.preventDefault();
   if(nextPageData){
       nextPageData();
   } else {
       getNextPage=true;
   }
});

$(document).keypress(function(e){
    var charStr = String.fromCharCode(e.which);
     
    if(charStr == 'f' || charStr == '8' ){
        if(nextPageData){
            nextPageData();
        } else {
            getNextPage=true;
        }
        return;
    }
    
    $('[accesskey='+charStr+']').click();
    
});

$.get('answer.php', function(data){
    if(getNextPage){
        $('body').html(data);
        setupAnswer();
    } else {
        nextPageData = function () {
            $('body').html(data);
            setupAnswer();
        };
    }
});

function setupAnswer(){
    $(document).keypress(function(e){
        var charStr = String.fromCharCode(e.which);

        $('[accesskey='+charStr+']').click();

    });
}
