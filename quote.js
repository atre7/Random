$(function() {
  // Using JSONP  CORS
  $('#newQuote').click(function() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      // The name of the callback parameter, as specified by the YQL service
      jsonp: "Callback",
      // Tell jQuery we're expecting JSONP
      dataType: "jsonp",
      // Tell YQL what we want and that we want JSON &jsonp=myCallback
      data: "method=getQuote&format=jsonp&lang=en&jsonp=myCallback",
      jsonpCallback: 'myCallback', // nutne
      // Work with the response
      success: function(response) {
        //  console.log(response); // server response
        $('#quote').text(response.quoteText);

        $('#autor').text(response.quoteAuthor);
        changeTitle(response.quoteText);
      }
    });

  }); // apiQuote ,
  function changeTitle(title) {
    document.title = title;
  }
})
$('#tweet').click(function() {
  window.open('https://twitter.com/intent/tweet?text=' + $('#quote').text() + " - " + $('#autor').text() + ",via @(atre7.github.io/Random)", "popup", "width=800, height=500");


});
