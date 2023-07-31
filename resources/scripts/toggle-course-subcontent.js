// JQuery script to toggle course subcontents dropdown
$(function toggleCourseSubcontent(){
  $(".course-content").click(function () {
    $(this).next(".course-subcontent").slideToggle(500);
    $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
  });  
})