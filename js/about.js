//alert('JJ doing');

$(document).ready(function(){
   $('.screen').hide().fadeIn(1000);
   $('#usb').hide().delay(500).fadeIn(1000);
   $('#laptop').hide().delay(1000).fadeIn(1000);

   $("#laptop").mouseenter(function(){
     $("#idea").fadeTo(1000, 1.0);
   });
    
   $("#laptop").mouseleave(function(){
      $("#idea").fadeTo(1000, 0);
   });
      
});
