$('#bg-vid').playbackRate = 0.5;

$(document).ready(function(){
  setTimeout(function(){
    $('#bg-vid').trigger('pause');
  },1000);
})
