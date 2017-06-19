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
    }
);

