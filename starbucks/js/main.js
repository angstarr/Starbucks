$(document).ready(function(){

  var tmpMenu;
  var curMenu;

  $('.menu_ttl, .m_gnb_ttl1, .m_gnb_ttl2').on('click', function()
  {

    $(this).parent(".sub").children("li")
          .not('.menu_ttl, .m_gnb_ttl1, .m_gnb_ttl2').slideToggle("300");

  });


  $('li.ipad_gnb3 a').on('click', function()
  {

      $('.m_gnb_dimm').attr('style', 'display:block;');
      $('.m_gnb_wrap').animate({
          right: '0px'
      });

      $('.btn_gnb_close a ').on('click', function()
      {
        $('.m_gnb_dimm').attr('style', 'display:none;');
        $('.m_gnb_wrap').animate({
            right: '-100%'
        });
      });
  });

  var embed = $('#youtube');

  $('.store_main_btn').on('click', function(){

        // append 때문에 유튜브 창이 뜨기까지 로딩시간이너무 걸림
        // 아예 api로 짜봐야될거같은데 나중에 해보기로
        $('.youtubeModal').attr('style', 'display:block;');
        $('.modalCont').append(embed);

        $('.close_btn').on('click', function(){
          $('.youtubeModal').attr('style', 'display:none;');
          $('.modalCont').empty();
        });

  });

  $('.bgr_btn').on('click', function(){

      $('.main_prom_bnr').toggleClass('on');

  });

  $('.product_view a, .promotionView p a').click(function(){

      $('.product_detail, .what_promotion').toggleClass('on');
  });

  $('ul.gnb_dropdown > li').on('mouseover', function()
  {

      curMenu = $(this);
      curMenu.children('.gnb_sub_wrap').addClass("on");

      curMenu.on('mouseleave', function()
      {

        tmpMenu = curMenu;
        tmpMenu.children('.gnb_sub_wrap').removeClass("on");

      })

  });

    var award = $('.bxslider').bxSlider( {
        mode: 'horizontal',// 가로 방향 수평 슬라이드
        speed: 500,        // 이동 속도를 설정
        pager: false,      // 현재 위치 페이징 표시 여부 설정
        moveSlides: 1,     // 슬라이드 이동시 개수
        slideWidth: 300,   // 슬라이드 너비
        minSlides: 1,      // 최소 노출 개수
        maxSlides: 1,      // 최대 노출 개수
        slideMargin: 1,    // 슬라이드간의 간격
        auto: true,        // 자동 실행 여부
        autoHover: false,   // 마우스 호버시 정지 여부
        controls: false,    // 이전 다음 버튼 노출 여부,
        autoControls: true,
        autoControlsCombine: true,
    });

    var promSlider = $('.bx-slider').bxSlider( {
        mode: 'horizontal',
        speed: 500,
        pager: false,
        moveSlides: 1,
        slideWidth: 1100,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 1,
        auto: true,
        autoHover: false,
        controls: false,
        autoControls: true,
        autoControlsCombine: true,
    });

    $('.main_prevBtn').on('click', function() {
        promSlider.goToPrevSlide();

    });


    $('.main_nextBtn').on('click', function() {
        promSlider.goToNextSlide();

    });

    var windowWidth = $(window).width();

      if(windowWidth > 640) {
        $('.coffeeSlider').bxSlider( {
            mode: 'fade',
            speed: 500,
            pager: true,
            moveSlides: 1,
            slideWidth: 2290,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 1,
            auto: true,
            autoHover: false,
            controls: false,
            autoControls: true,
            autoControlsCombine: true,
            responsive: true,
        });

      } else {

        $('.coffeeSlider').bxSlider( {
            mode: 'horizontal',
            speed: 500,
            pager: true,
            moveSlides: 1,
            slideWidth: 640,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 0,
            auto: true,
            autoHover: false,
            controls: false,
            autoControls: true,
            autoControlsCombine: true,
            // responsive: true,
        });

      }

    var lineSwiper = new Swiper ('.news_swiper', {

      direction: 'verical',
      loop: true,
      slidesPerView: 1,
      autoplay: true,
      // freeMode: true, //슬라이드넘길때 위치 고정여부
      // autoHeight : true, // 슬라이 높이에 맞게 고정
    });

    var whatSwiper = new Swiper('.what_main', {

        effect: 'fade',
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 500,
        pagination: {
          el: '.swiper-pagination',
          clickable : true,
        },
    });

    var environSwiper = new Swiper('.environment_main', {

      slidesPerView: 1,
      loop: true,
      autoplay: true,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable : true,
      },
      navigation : { 
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
      },
  });

});
