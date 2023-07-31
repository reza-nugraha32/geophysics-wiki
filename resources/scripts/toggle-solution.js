// JQuery script to toggle dropdown
$(function toggleSolution(){
    $(".toggle-solution").click(function () {
      $(this).next(".solution-content").slideToggle(500);
      $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
    });  
})