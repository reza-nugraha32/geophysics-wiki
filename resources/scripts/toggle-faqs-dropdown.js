// JQuery script to toggle dropdown
$(function toggleDropdown(){
    $(".faqs-dropdown").click(function () {
      $(this).next(".dropdown-content").toggle(300);
      $("i", this).toggleClass("fa-plus fa-minus");
    });  
})