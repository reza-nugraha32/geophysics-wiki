$(".language-switch").click(function(){
    if ($(this).children(".language").text() == "EN") {
        $(this).children(".language").text("ID");
    }
    else {
        $(this).children(".language").text("EN");  
    }
    console.log($(this).children(".language").text());
    console.log($("html").attr("lang"))
});   

