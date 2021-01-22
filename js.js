    $("document").ready(function () {
    var slidler = $('#slidler .slide');
    var showSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);
     function nextSlide() {
        slidler[showSlide].className = 'slide';
        showSlide = (showSlide + 1) % slidler.length;
        slidler[showSlide].className = 'slide showing';
        
    }
    $(".right").on("click", function () {
        slidler[showSlide].className = 'slide';
        showSlide = (showSlide + 1) % slidler.length;
        slidler[showSlide].className = 'slide showing';
        return
    })
    $(".left").on("click", function () {
        slidler[showSlide].className = 'slide';
        showSlide = (showSlide + slidler.length - 1) % slidler.length;
        slidler[showSlide].className = 'slide showing';

        return
    })
    
    // for (let i = 0; i < 6; i++) {
    //     $("button").eq(i + 2).on("click", function () {
    //         slidler.removeClass('showing')
    //     slidler.addClass('slide')
    //     slidler[i].className = 'slide showing';
    //     $("button").eq(2).css({"padding":"0"});
    //     $("button").eq(3).css({"padding":"0"});
    //     $("button").eq(5).css({"padding":"0"});
    //     $("button").eq(6).css({"padding":"0"});
    //     $("button").eq(7).css({"padding":"0"});
    //     $("button").eq(4).css({"padding":"0"});
    //     $("button").eq(i + 2)  .css({"padding":"10px"})  ;
    //  })
    // }
    

    $(document).ready(function(){
        $('.your-class').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
      });

});

