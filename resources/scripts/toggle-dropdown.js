// JQuery script to toggle dropdown
$(function toggleDropdown(){
    $(".toggle-dropdown").click(function () {
      $(this).next(".dropdown-content").slideToggle(0);
      $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
    });  
})

// JQuery script to toggle table of contents
$(function toggleTableofContents(){
   
  $(".contents-header").click(function () {
      $(".table-of-contents").slideToggle(0);
      $("i", this).toggleClass("fa-times fa-bars");
  });  

  if ($(".table-of-contents").css("display") != "none"){
      $("i", ".contents-header").removeClass("fa-bars");
      $("i", ".contents-header").addClass("fa-times");
  } else{
      $("i", ".contents-header").removeClass("fa-times");
      $("i", ".contents-header").addClass("fa-bars");
  }
})

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

$(window).scroll(function () {
  if ($(this).scrollTop() < 100) {
    if ($(".topnav-table-of-contents").css("display") == "none"){
      $(".topnav-contents").addClass("hidden");
    }
  } else {
    $(".topnav-contents").removeClass("hidden");
  }
});

// JQuery script to toggle course subcontents dropdown
$(function toggleCourseSubcontent(){
  $(".course-content").click(function () {
    $(this).next(".course-subcontent").slideToggle(300);
    $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
  });  
})

// JQuery script to toggle solution dropdown
$(function toggleSolution(){
  $(".toggle-solution").click(function () {
    $(this).next(".solution-content").slideToggle(0);
    $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
  });  
})

// JQuery script to toggle solution dropdown
$(function toggleCodeOutput(){
  $(".run-code-button").click(function () {
    $(".pyscript-container").next(".python-output").css({"display":"block"});
  });  
})
