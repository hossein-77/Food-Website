$(document).ready(function(){
  $('.icon-menu').click(function(){
    $('.menu-list').css('display','block');
  });
  $('.icon-close,main').click(function(){
    $('.menu-list').css('display','none');
  });
  $('.button-item').click(function(){
    $('.button-item img').toggleClass('open-button');
    if($('.button-item img').hasClass('open-button')){
      $('.button-item img').css('transform','rotate(180deg)')
      $('.cadr-button').css('display','block')
    }else{
      $('.button-item img').css('transform','rotate(0deg)')
      $('.cadr-button').css('display','none')
    }
  });
});
