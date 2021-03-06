$('#bg-vid').playbackRate = 0.5;

$(document).ready(function(){
  setTimeout(function(){
    $('#bg-vid').trigger('pause');
    $('#bg-vid').hide();
  },1000);
})

$('.tile').on('click',function(){
  whatTile = $(this).data('id');
  $('.modal[data-id='+whatTile+']').addClass('active');
})
$('.close').on('click',function(){
  $('.modal').removeClass('active');
})

const swiper = new Swiper('.swiper-ag', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});