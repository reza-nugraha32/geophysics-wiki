// Show and hide table of contents in the topnav
$(function toggleTopnavTableofContents(){
    $(".topnav-contents").click(function () {
        $(".topnav-table-of-contents").slideToggle(0);
        $("i", this).toggleClass("fa-times fa-bars");
    });  
    
    $(".main").click(function () {
      $(".topnav-table-of-contents").css({"display":"none"});
      $("i", ".topnav-contents").removeClass("fa-times");
      $("i", ".topnav-contents").addClass("fa-bars");
    }); 
  
    if ($(".topnav-table-of-contents").css("display") != "none"){
        $("i", ".topnav-contents").removeClass("fa-bars");
        $("i", ".topnav-contents").addClass("fa-times");
    } else{
        $("i", ".topnav-contents").removeClass("fa-times");
        $("i", ".topnav-contents").addClass("fa-bars");
    }
  })
  
  // Show table of contents button when window is scrolled down 
  $(window).scroll(function () {
    if ($(this).scrollTop() < 100) {
      if ($(".topnav-table-of-contents").css("display") == "none"){
        $(".topnav").removeAttr("style");
        $(".topnav-contents").addClass("hidden");
      }
    } else {
      if ($("body").attr("class") != "dark-mode"){
        $(".topnav").css({"box-shadow":"none", "border-bottom":"solid", "border-width":"0.5px", "border-bottom-color":"#80808050"});
      }
      $(".topnav-contents").removeClass("hidden");
    }
  });