$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hidden-project').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            console.log(bottom_of_window)
            console.log(bottom_of_object)
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                console.log("happy")
                $(this).slideDown(3000).animate(
                  {'opacity':'1'}, 500);
                 
            }
            
        }); 
    
    });
    
});