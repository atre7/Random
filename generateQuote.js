$(document).ready(function() {

  // Using JSONP  CORS
  $('#apiQuote').click(function() {
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
        $('#citation').text(response.quoteText);
        $('#autor').text(response.quoteAuthor);
      }
    });

  }); // apiQuote ,



  //
  function getLocationIP() {
    $.get("http://ipinfo.io", function(location) {
      console.log("IP " + location.loc);
      $('#newQuote').text(location.loc);
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
