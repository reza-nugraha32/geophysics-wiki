// JQuery script to toggle dropdown
$(function toggleDropdown(){
    $(".toggle-dropdown").click(function () {
      $(this).next(".dropdown-content").toggle(300);
      $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
    });  
})