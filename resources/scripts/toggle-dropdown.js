// JQuery script to toggle dropdown
$(function toggleDropdown(){
    $(".toggle-dropdown").click(function () {
      $(this).next(".dropdown-content").slideToggle(0);
      $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
    });  
})