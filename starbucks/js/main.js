$(document).ready(function(){

  $('ul.sub .menu_ttl').on('click', function()
  {

    $(this).parent(".sub").children("li").not('.menu_ttl')
          .slideToggle("300");

  });


});
