// Trim code whitespace to remove margin when highlighting code using highlight.js
$(document).ready(function() {
  $(document.body).find("pre code").each(function() {
    $(this).html($.trim($(this).html()));
  });
});