$(document).ready(function(){

  $('a').on('click', function(e){
    e.preventDefault();
  });


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

  var tmpMenu;
  var curMenu;

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

});
