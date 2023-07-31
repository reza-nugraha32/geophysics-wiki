// JQuery script to toggle course subcontents dropdown
$(function toggleTablleofContents(){
   
    $(".contents-header").click(function () {
        $(".left-table-of-contents").toggle(200);
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