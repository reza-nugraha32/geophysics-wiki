// JQuery script for assigning gradient to course cover
$(document).ready(function(){
    var gradient_1 = "linear-gradient(45deg, #FDBB2D 0%, #22C1C3 100%)";
    var gradient_2 = "linear-gradient(45deg, #FDBB2D 0%, #3A1C71 100%)";
    var gradient_3 = "linear-gradient(45deg, #3F2B96 0%, #A8C0FF 100%)";
    var gradient_4 = "linear-gradient(45deg, #f8ff00 0%, #3ad59f 100%)";
    var gradient_5 = "linear-gradient(45deg, #d53369 0%, #daae51 100%)";
    var gradient_6 = "linear-gradient(45deg, #0700b8 0%, #00ff88 100%)";
    var gradient_7 = "linear-gradient(45deg, #efd5ff 0%, #515ada 100%)";
    var gradient_8 = "linear-gradient(45deg, #FC466B 0%, #3F5EFB 100%)";
    var gradient_9 = "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)";
    var colors = [gradient_1, gradient_2, gradient_3, gradient_4, gradient_5, gradient_6, gradient_7, gradient_8, gradient_9];
    
    $(".course-cover").each(function(){
      var new_color = colors[Math.floor(Math.random()*colors.length)];
      $(this).css("background", new_color);
    });
}); 