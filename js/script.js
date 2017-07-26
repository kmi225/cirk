var slideIndex = 0;
    

function slideshow(){
    var slideTime=null;
    var i;
    var slides = $('.sh');
    
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    } 

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    slideIndex +=1;
    setTimeout(slideshow,5000);
}

function wheels(){
    $("#wheel").css("-transform-origin", "15rem 15rem");
    var mouse = true;
    
    var interval = null;
    var counter = 0;
    clearInterval(interval);
    mouse = true;

    $('#wheel').mouseenter(function(){
       mouse=true;     
    });

    $('#wheel').mouseleave(function(){
        mouse=false;
    });           
        interval = setInterval(function(){
            if (mouse==true){
               counter+=1;
               counter=counter%360;    
               $('#wheel').css({
                 MozTransform: 'rotate(-' + counter + 'deg)',
                 WebkitTransform: 'rotate(' + counter + 'deg)',
                 transform: 'rotate(' + counter + 'deg)'
               });                    
            }
        }, 50);
    

}


$(document).ready(function(){
    wheels();  
    slideshow();

});
