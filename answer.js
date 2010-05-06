var submit_0 = $('input[accesskey=0]');
var submit_1 = $('input[accesskey=1]');
var submit_2 = $('input[accesskey=2]');
var submit_3 = $('input[accesskey=3]');
var submit_4 = $('input[accesskey=4]');
var submit_5 = $('input[accesskey=5]');

$(document).keypress(function(e){
   switch(e.which)
   {
       case 48:
        alert("0 clicked");
        submit_0.click();
        break;
    
        case 49:
         submit_1.click();
         break;
         
       case 50:
        submit_2.click();
        break;
    
       case 51:
        submit_3.click();
        break;
        
       case 52:
        submit_4.click();
        break;
        
       case 53:
        submit_5.click();
        break;
        
       default:
        break;
   }    
});