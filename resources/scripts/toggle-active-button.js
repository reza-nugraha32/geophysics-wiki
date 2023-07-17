$(function toggleActive(){
    $(".year-button").click(function(){
      $(".year-button").removeClass("active")
      $(this).addClass("active")
  
      var render_id = $(this).attr("id");
      var a = document.getElementById("first-year-course");
      var b = document.getElementById("second-year-course");
      var c = document.getElementById("third-year-course");
      var d = document.getElementById("fourth-year-course");
      var e = document.getElementById("first-year-course-even");
      var f = document.getElementById("second-year-course-even");
      var g = document.getElementById("third-year-course-even");
      var h = document.getElementById("fourth-year-course-even");
      
      console.log($(this).attr("class"));
  
      if (render_id == "first-year"){
        a.style.height = "100%";
        a.style.width = "100%";
        b.style.height = 0;
        c.style.height = 0;
        d.style.height = 0;
        e.style.height = "100%";
        e.style.width = "100%";
        f.style.height = 0;
        g.style.height = 0;
        h.style.height = 0;
  
      } else if (render_id == "second-year"){
        a.style.height = 0;
        b.style.height = "100%";
        b.style.width = "100%";
        c.style.height = 0;
        d.style.height = 0;
        e.style.height = 0;
        f.style.height = "100%";
        f.style.width = "100%";
        g.style.height = 0;
        h.style.height = 0;
      
      } else if (render_id == "third-year"){
        a.style.height = 0;
        b.style.height = 0;
        c.style.height = "100%";
        c.style.width = "100%";
        d.style.height = 0;
        e.style.height = 0;
        f.style.height = 0;
        g.style.height = "100%";
        g.style.width = "100%";
        h.style.height = 0;
      
      } else if (render_id == "fourth-year"){
        a.style.height = 0;
        b.style.height = 0;
        c.style.height = 0;
        d.style.height = "100%";
        d.style.width = "100%";
        e.style.height = 0;
        f.style.height = 0;
        g.style.height = 0;
        h.style.height = "100%";
        h.style.width = "100%";
      }
    }); 
  });