$(function() {
  var quoteTest;
  var quoteArray = [];
  var index = 0;
  var p = 1;
  getQuote();
  // Using JSONP   CORS
  function getQuote() {

    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      // The name of the callback parameter,
      jsonp: "Callback",
      // Tell jQuery we're expecting JSONP
      dataType: "jsonp",
      // Tell  what we want  JSON &jsonp=myCallback
      data: "method=getQuote&format=jsonp&lang=en&jsonp=myCallback",
      jsonpCallback: 'myCallback', // nutne
      // Work with the response
      success: function(response) {
        //  console.log(response); // server response
        $('#quote').text(response.quoteText.replace(/;/gi, ","));
        // same quote contains ";"
        quoteArray[index] = {
          q: response.quoteText.replace(/;/gi, ","),
          a: response.quoteAuthor
        };
        index++;
        $('#autor').text(response.quoteAuthor);
        //changeTitle(response.quoteText);
        // prev(response.quoteText);
      }
    });

  }
  function prev(text) {

    var myWindow = window.open("", "popup", "width=400,height=300");
    myWindow.document.write("<p>" + text + "</p>");
  }

  $('#prevQuote').click(function() {
    if ((index - (p + 1)) >= 0) {
      $('#quote').text(quoteArray[index - (p + 1)].q);
      $('#autor').text(quoteArray[index - (p + 1)].a);
      p++;
    }
    if ((index - p) <= 0) {
      $('#prevQuote').addClass('empty')
    }
  });

  $('#newQuote').click(function() {
    getQuote();
    p = 1;
    if ((index - p) >= 0) {
      $('#prevQuote').removeClass('empty')
    }

  }); // apiQuote ,
  function changeTitle(title) {
    document.title = title;
  }

  $('#tweet').click(function() {

    if (($('#quote').text().length + $('#autor').text().length) < 107) {
      window.open('https://twitter.com/intent/tweet?text=' +
        $('#quote').text() + " - " + $('#autor').text() +
        ",via @(atre7.github.io/Random)", "popup", "width=800, height=500");
    } else {
      var myWindow = window.open("", "popup", "width=400,height=300");
      myWindow.document.write("<p>" + $('#quote').text() + "</p><br>" +
        "<p>This quote is too long for tweet : " + ($('#quote').text().length + $('#autor').text().length) + "</p>");
    }


  });
})
