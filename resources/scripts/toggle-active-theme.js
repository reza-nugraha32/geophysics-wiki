$(document).ready(function(){
    $(".mode-switch").click(function(){
      $("i", this).toggleClass("fa-moon-o fa-sun-o");
      $(".light-theme").toggleClass("dark-theme");
      console.log($(this).attr("class"));
    });   
});