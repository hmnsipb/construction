$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
});

/*$(document).ready(function(){

$('.banner-slider').slick({
    slideToShow:1,
    slideToScroll:1,
    arrows:true,
    dots:true,
    pauseOnHover:false,
});
    
});*/

$(window).scroll(function(){
    
if($(window).scrollTop() >= 530){
    
$('.navigation_bar').addClass('fixed');
    
}
    else{
        $('.navigation_bar').removeClass('fixed');
    }
    
});

$('#search_button').click(function(){
    
    $('.search_bx').slideToggle();
    
})

//countup.js for counting numbers

var a = 0;
$(window).scroll(function(){
    
    var oTop = $('.completed_project').offset().top - window.innerHeight;
    
    if(a == 0 && $(window).scrollTop() > oTop){
        
        $('.count').each(function(){
            
            var $this = $(this),
                
                countTo = $this.attr('data-val');
            
            $({
                
                countNum: $this.text()
                
            })
            
            .animate({
                
                countNum: countTo
            
            },

                     {
                     
                durartion: 1000,
                    step: function(){
                        
                        $this.text(Math.floor(this.countNum));
                    },
                        
                        complete: function(){
                            
                            $this.text(this.countNum);
                            //alert('finished');
                            
                        }
            
            
            });
        
        });
        
        a = 1;
        
    }
    
});

lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 500,
        // ... other settings
        });