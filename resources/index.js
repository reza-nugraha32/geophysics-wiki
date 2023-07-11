$(function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
});

$(function toggleActive(){
  $('.year-button').click(function(){
    $('.year-button').removeClass('active')
    $(this).addClass('active')

    var render_id = $(this).attr('id');
    var a = document.getElementById('first-year-course');
    var b = document.getElementById('second-year-course');
    var c = document.getElementById('third-year-course');
    var d = document.getElementById('fourth-year-course');
    var e = document.getElementById('first-year-course-even');
    var f = document.getElementById('second-year-course-even');
    var g = document.getElementById('third-year-course-even');
    var h = document.getElementById('fourth-year-course-even');
    
    console.log($(this).attr('class'));

    if (render_id == 'first-year'){
      a.style.display = "block";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "block";
      f.style.display = "none";
      g.style.display = "none";
      h.style.display = "none";

    } else if (render_id == 'second-year'){
      a.style.display = "none";
      b.style.display = "block";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      f.style.display = "block";
      g.style.display = "none";
      h.style.display = "none";
    
    } else if (render_id == 'third-year'){
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "block";
      d.style.display = "none";
      e.style.display = "none";
      f.style.display = "none";
      g.style.display = "block";
      h.style.display = "none";
    
    } else if (render_id == 'fourth-year'){
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "block";
      e.style.display = "none";
      f.style.display = "none";
      g.style.display = "none";
      h.style.display = "block";
    }
  }); 
});