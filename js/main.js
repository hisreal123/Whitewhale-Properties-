$(document).ready(function () {

    let tpNav = $('.tpNav');
    let wrap = $('.wrap')
    let smallWtihLogo = $('.wthLogo')
    let banner = $('.banner')
    let imgS = $(".imgBox");
    let win = $(window)
    
    // adding shadow  to all the imgs when the page finish loading 
    $(".boxImg").addClass('shadow');

    // animate window
    

    // loader
    $('.loader').fadeOut(1000)


    $(window).scroll(function () {
        let wScroll = $(this).scrollTop();
        if(wScroll > 100) {
          tpNav.addClass('fixed-top')
        }
    });

    // away from scroll


    $('.banner').owlCarousel({
      autoplay: true,
      loop: true,
      items: 1,
      autoWidth: false,
      autoHeight: false, 
      nav: false, 
      dots: false,
      smartSpeed: 600,
    })

    // owl-carousel
    $(".showCase_grid").owlCarousel({
      // autoHeight: false ,
      // autoWidth: false ,
      margin: 30,
      smartSpeed: 1000,
      loop: true,
      items: 1,
      autoplay: true,

      responsive: {
        0: {
          items: 1,
        },

        400: {
          items: 2,
        },

        600: {
          items: 3,
        },

        1200: {
          items: 4,
        },
      },
    });
// displaying the SERVICE note

$(".d-note").on('click', function(){
  $(".floatContent").fadeIn();
  $(".oLay").fadeIn();
  });


$('.close').on('click', function(){
  $(".floatContent").fadeOut(200);
  $(".oLay").fadeOut();
});


// setBg function
  $('.bannerChildWrap').each(function(){
    let bg = $(this).data('setbg');
    $(this).css({
      'background-image': 'url(' + bg + ')'
    });
  })

})
