$(document).ready(function() {
    setupSmoothScroll();

    $(".btn[data-toggle='collapse']").click(function() {
        if ($(this).text().trim() == 'Read more') {
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
        }
    });
});

function setupSmoothScroll() {
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function(event) {   
        
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Hide navbar on mobile
            $('.navbar-collapse').collapse('hide');

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 600, function() {
                
                // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
                if (history.pushState) {
                    history.pushState(null, null, hash); 
                } else {
                    window.location.hash = hash;
                } 
            });
            return false;    
        }
    });
}