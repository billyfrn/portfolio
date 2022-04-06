$('#bg-vid').playbackRate = 0.5;

$(document).load(function(){
  setTimeout(function(){
    $('#bg-vid').trigger('pause');
  },3000);
})
