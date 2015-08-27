$(document).ready(function() {

  // file reader
  $('#fileLoadTest').click(function() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
      alert("Great success! All the File APIs are supported.");
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
  });
  // fileReader
  $('#lineRead').click(function() {
    $.get('text.txt', function(data) {
      var lines = data.split('\n');
      for (var i = 0; i < lines.lengt; i++) {
        console.log('i : ' + i + " " + lines[i]);
      }
    });
  });

  function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      var lines = contents.split('\n');
      for (var i = 0; i < lines.length; i++) {
        console.log("i : " + i + " " + lines[i]);
      }
      displayContents(contents);
    };
    reader.readAsText(file);
  }

  function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.innerHTML = contents;
  }

  document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);


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
