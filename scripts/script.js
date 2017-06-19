$(document).ready(

    function()
    {
    	var container = $("#letters");
    		userText = $('#userText'); 
    	
        container.shuffleLetters();

        $('.down-arrow').click(
            function()
            {
                $(this).css("visibility", "hidden");
            }
       );

        $('#pulsing-arrow').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',

            function()
            {
                $('#pulsing-arrow').addClass("loaded"); 
            }
        );

        $("#pulsing-arrow").click(
            
            function() {

                $('html, body').animate({
                    scrollTop: $("#arrow-anchor").offset().top
                }, 2000);
            }
        );

        $(window).scroll( function(){

            $('.hidden-project').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if(bottom_of_window+200 > bottom_of_object) {
                    $(this).addClass("animated fadeInDown");
                }
            }); 
            $('.hidden-col-left').each( function(i) {
              let bottomObject = $(this).offset().top + $(this).outerHeight();
              let bottomWindow = $(window).scrollTop() + $(window).height();
              if(bottomWindow+50 > bottomObject) {
                $(this).addClass("animated fadeInLeft");
              }
            });
            $('.hidden-col-right').each( function(i) {
              let bottomObject = $(this).offset().top + $(this).outerHeight();
              let bottomWindow = $(window).scrollTop() + $(window).height();
              if(bottomWindow+50 > bottomObject) {
                $(this).addClass("animated fadeInRight");
              }
            });

        }); 

        $('.project-image').click(

            function() {
                window.open($(this).data('url'));
            }
        );
    }
);

