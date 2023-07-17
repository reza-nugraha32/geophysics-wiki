// JQuery script for toggling between dark mode and light mode
$(document).ready(function(){
  $(".mode-switch").click(function(){
    $("i", this).toggleClass("fa-moon-o fa-sun-o");
    $(".light-mode").toggleClass("dark-mode");
    console.log($(this).attr("class"));
  });   
});