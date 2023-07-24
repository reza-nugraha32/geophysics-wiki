$(".language-switch").click(function(){
    if ($(this).children(".language").text() == "English") {
        $(this).children(".language").text("Indonesia");
    }
    else {
        $(this).children(".language").text("English");  
    }
    console.log($(this).children(".language").text());
    console.log($("html").attr("lang"))
});   

