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
      $(".left-table-of-contents").slideToggle(0);
      $("i", this).toggleClass("fa-times fa-bars");
  });  

  if ($(".left-table-of-contents").css('display') != 'none'){
      $("i", ".contents-header").removeClass("fa-bars");
      $("i", ".contents-header").addClass("fa-times");
  } else{
      $("i", ".contents-header").removeClass("fa-times");
      $("i", ".contents-header").addClass("fa-bars");
  }
})

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
    $(this).next(".solution-content").slideToggle(300);
    $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
  });  
})
