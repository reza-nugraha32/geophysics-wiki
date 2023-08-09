// Scroll left and right on the course list in the index page
$(".first-left-scroll").click(function () { 
  var leftPos = $(".first-semester").scrollLeft();
  $(".first-semester").animate({scrollLeft: leftPos - 300}, 300);
  console.log(leftPos);
});

$(".first-right-scroll").click(function () { 
  var leftPos = $(".first-semester").scrollLeft();
  $(".first-semester").animate({scrollLeft: leftPos + 300}, 300);
  console.log(leftPos);
});

$(".second-left-scroll").click(function () { 
  var leftPos = $(".second-semester").scrollLeft();
  $(".second-semester").animate({scrollLeft: leftPos - 300}, 300);
  console.log(leftPos);
});

$(".second-right-scroll").click(function () { 
  var leftPos = $(".second-semester").scrollLeft();
  $(".second-semester").animate({scrollLeft: leftPos + 300}, 300);
  console.log(leftPos);
});