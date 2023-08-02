// JQuery script for toggling between dark mode and light mode
$(document).ready(function(){
  // Last theme used when visiting the web stored in localStorage
  var lastTheme = localStorage.getItem("theme")

  // Detect device theme
  const deviceThemeIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
  // If there is not any localStorage, falls back into device theme
  if (lastTheme != null){
    $("body").addClass(lastTheme)
  } else{
    if (deviceThemeIsDark) {
      $("body").addClass("dark-mode")
    } else {
      $("body").addClass("light-mode")
    }
  }
  
  // Sync between icon and theme
  if (lastTheme == "light-mode"){
    $("#switch-button").addClass("fa fa-sun-o")
  } else {
    $("#switch-button").addClass("fa fa-moon-o")
  }
  
  // Toggle theme on click
  $(".mode-switch").click(function(){
    $("i", this).toggleClass("fa-sun-o fa-moon-o")

    $("body").toggleClass("dark-mode light-mode")
    
    if ($("body").attr("class") == "dark-mode"){
      localStorage.setItem("theme", "dark-mode")
      lastTheme = localStorage.getItem("theme")

    } else if ($("body").attr("class") == "light-mode"){
      localStorage.setItem("theme", "light-mode")
      lastTheme = localStorage.getItem("theme");
    }
  });   
});