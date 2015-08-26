$(document).ready(function() {

  // Using JSONP  CORS
  $('#apiQuote').click(function() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",

      // The name of the callback parameter, as specified by the YQL service
      jsonp: "callback",

      // Tell jQuery we're expecting JSONP
      dataType: "jsonp",

      // Tell YQL what we want and that we want JSON
      data: "method=getQuote&format=jsonp&lang=en&jsonp=myCallback",

      jsonpCallback: 'myCallback',


      // Work with the response
      success: function(response) {
        console.log(response); // server response
        $('#citation').text(response.quoteText);
        $('#autor').text(response.quoteAuthor);
      }

    }, function(data) {
      console.log("data " + data);
    });

  }); // apiQuote

  // ajax api quote
  // http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en
  // CORS Error
  $('#apiQuoteVYRADENE').click(function() {
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en" ;
    $.get(url, function(data) {
      alert("recive quote: " + data.quoteText + " autor : " + data.quoteAuthor);
      $('#autor').text("(" + data.quoteAuthor + ")");
      $('#citation').text(data.quoteText);
    });
  });

  //
  var i = 0;
  $('#newQuote').text("nova citacia");

  $('#getQuote').click(function() {
    $('#newQuote').text("nova citacia" + i);
    i++;
  })

  //
  function getLocationIP() {
    $.get("http://ipinfo.io", function(location) {
      console.log("IP " + location.loc);

      //return weather nic;

    }, "jsonp");

  }
  getLocationIP();

  $('#geo').click(function() {
    console.log("geolocation: ");
    getLocation();
    var x = document.getElementById("demo");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    }


  }) ;
  // location

  // window and screen x y
  console.log("window height " + $(window).height());
  console.log("doc height " + $(document).height());
  console.log("screen height " + screen.height);

  // print on screen width height
  $('#pWidthWindow').text("windov width : " + $(window).width());
  $('#pHeightWindow').text("window height : " + $(window).height());
  $('#pWidthScreen').text("screen width : " + screen.width);
  $('#pHeightSreen').text("screen height : " + screen.height);
  // on resize
  $(window).resize(function() {
    $('#pWidthWindow').text("windov width : " + $(window).width());
    $('#pHeightWindow').text("window height : " + $(window).height());
    $('#pWidthScreen').text("screen width : " + screen.width);
    $('#pHeightSreen').text("screen height : " + screen.height);
  });
  // window and screen x y
});
