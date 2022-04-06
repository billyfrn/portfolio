$('#bg-vid').playbackRate = 0.5;

$(document).ready(function(){
  setTimeout(function(){
    $('#bg-vid').trigger('pause');
    $('#bg-vid').hide();
  },1000);
})
