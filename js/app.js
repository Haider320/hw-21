$(function(){
    $(window).on('scroll', function(){
    
        var scrollSize = $(window).scrollTop()

        if(scrollSize > 500){
            $('#top_icon').fadeIn(3000);
        } else{
            $('#top_icon').fadeOut(3000);
        }



        if(scrollSize > 50){
            $('#nav').addClass('active')
        }else{
            $('#nav').removeClass('active')
        }

        
    })


    $('#top_icon').on('click', function(){
        $('html, body').animate({
            scrollTop:0,
        },3000)



        // $('.your-class').slick({
            // setting-name: setting-value
        //   });


        
    })


    // sticky menu start

    // slider section start


    $('.slider').slick({
        arrows:false,
        autoplay:true,
        


    })

    
})