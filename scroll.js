$(document).ready(function() {

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

});