$(function(){
    var $header = $('header');
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $header.addClass('sticky');
        }else{
            $header.removeClass('sticky');
        };
      });//scroll
      var button = $('.tab_wrap>button');
      var img = $('.spaceVideo img');
      var i =$(this).index();
      $(button).on('click',function(){
        $(button).removeClass('on');
        $(img).removeClass('on');
        $(this).addClass('on');
        $(img).eq(i++).addClass('on');
      });//click.retry
});//doc;