$(document).ready(function(){
    var left_pos = $(".code-copied-alert").css("left")

    $(".copy-code-button").click(function(){
        var code_id = this.id.slice(5)

        $(".code-copied-alert").stop(true).css({opacity:1, left:"-500px", display:"flex"})
        $(".code-copied-alert").animate({left:left_pos}, 300)
        $(".code-copied-alert").animate({opacity:0}, 3000)
        
        var selector = code_id+"_code"
        var codeText = document.getElementById(selector).textContent;
        navigator.clipboard.writeText(codeText)
    });
    
    $(".close-alert").click(function(){
        $(".code-copied-alert").stop(true).css({display:"none"})
    });

    
});