// top
$(function(){
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "8000");
  return false;
});
});
//personal
$(function(){
$("a[href='#personal']").click(function() {
  $("html, body").animate({scrollTop:$('#testimonial-block-wrap').offset().top}, "2000");
  return false;
});
});
//work
$(function(){
$("a[href='#work']").click(function() {
  $("html, body").animate({scrollTop:$('#service-block-wrap').offset().top}, "2000");
  return false;
});
});
//history
$(function(){
$("a[href='#history']").click(function() {
  $("html, body").animate({scrollTop:$('#history').offset().top}, "2000");
  return false;
});
});
