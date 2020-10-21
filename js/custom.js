var $temp = $("<input>");
var $url = $(location).attr('href');


/*
$('.clipboard').on('click', function() {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $temp.remove();
  $(".copy").text("URL copied!");
})
*/


window.setTimeout(function(){
  $('.clipboard').on('click', function(){
    $('body').append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $(".copy").text('copied to clipboard').fadeTo(500, 0).slideUp(500, function(){
      $(this).remove();
    })
  })
}, 5000);

