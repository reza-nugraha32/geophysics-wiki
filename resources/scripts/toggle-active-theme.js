// JQuery script for toggling between dark mode and light mode
$(document).ready(function(){
  var lastTheme = localStorage.getItem("theme");
  console.log(lastTheme);

  if (lastTheme != null){
    $("body").addClass(lastTheme);
  } else{
    $("body").addClass("light-mode");
  }
  
  $(".mode-switch").click(function(){
    $("i", this).toggleClass("fa-moon-o fa-sun-o");

    $("body").toggleClass("dark-mode light-mode");
    
    if ($("body").attr("class") == "dark-mode"){
      localStorage.setItem("theme", "dark-mode");
      lastTheme = localStorage.getItem("theme");

    } else if ($("body").attr("class") == "light-mode"){
      localStorage.setItem("theme", "light-mode");
      lastTheme = localStorage.getItem("theme");
    
    }
  });   
});