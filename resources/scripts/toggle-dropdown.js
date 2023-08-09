// Toggle table of contents container
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

// Toggle dropdown on table of contents
$(function toggleDropdown(){
  $(".toggle-dropdown").click(function () {
    $(this).next(".dropdown-content").slideToggle(0);
    $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
  });  
})

// Toggle course subcontents dropdown
$(function toggleCourseSubcontent(){
  $(".course-content").click(function () {
    $(this).next(".course-subcontent").slideToggle(300);
    $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
  });  
})

// Toggle solution dropdown
$(function toggleSolution(){
  $(".toggle-solution").click(function () {
    $(this).next(".solution-content").slideToggle(0);
    $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
  });  
})

// Toggle output terminal
$(function toggleCodeOutput(){
  $(".run-code-button").click(function () {
    $(".pyscript-container").next(".python-output").css({"display":"block"});
  });  
})
