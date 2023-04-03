$(window).on('scroll', function(){
    var  winTop = $(window).scrollTop();
      if (winTop >= 1) {    $('.navbar').addClass('fixed').removeClass('top');
      } else if (winTop <= 0) {    $('.navbar').addClass('top').removeClass('fixed');    
      }
    })