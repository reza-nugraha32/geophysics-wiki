// Toggle dropdown in FAQs page
$(function toggleDropdown(){
    $(".faqs-dropdown").click(function () {
      $(this).next(".dropdown-content").slideToggle(500);
      $("i", this).toggleClass("fa-plus fa-minus");
    });  
})