$(document).ready(function() {
  var i = 0;
  $('#newQuote').text("nova citacia");

  $('#getQuote').click(function() {
    $('#newQuote').text("nova citacia" + i);
    i++;
  })
});
