// Copy code to clipboard when copy button is clicked
$(document).ready(function(){
    // Get initial position of the alert container
    var left_pos = $(".code-copied-alert").css("left")

    $(".copy-code-button").click(function(){
        // Get id of a specific code container
        var code_id = this.id.slice(5)

        // Animate copy alert
        $(".code-copied-alert").stop(true).css({opacity:1, left:"-500px", display:"flex"})
        $(".code-copied-alert").animate({left:left_pos}, 300)
        $(".code-copied-alert").animate({opacity:0}, 3000)
        
        // Pass id as selector and copy its text to clipboard
        var selector = code_id+"_code"
        var codeText = document.getElementById(selector).textContent;
        navigator.clipboard.writeText(codeText)
    });
    
    // Close alert when cross icon is clicked
    $(".close-alert").click(function(){
        $(".code-copied-alert").stop(true).css({display:"none"})
    });
});