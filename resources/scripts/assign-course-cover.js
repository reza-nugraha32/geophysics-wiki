// JQuery script for assigning gradient to course cover
$(document).ready(function(){
    var gradient_1 = "linear-gradient(45deg, #FDBB2D 0%, #22C1C3 100%)";
    var gradient_2 = "linear-gradient(45deg, #0700b8 0%, #00ff88 100%)";
    var colors = [gradient_1, gradient_2];

    $(".course-cover").each(function(){
      $(".course-cover:odd").css("background", colors[0]);
      $(".course-cover:even").css("background", colors[1]);
    });
}); 