$(function() {
  setIcon($(window).height(), $(window).width());

  var quoteArray = [];
  var index = 0;
  var p = 0;
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
        if (response.quoteAuthor === "" || response.quoteAuthor === null) {
          $('#autor').text("unknown autor");
        } else {
          $('#autor').text(response.quoteAuthor);
        }
        console.log("A " + response.quoteAuthor);

        quoteArray[index] = {
          q: response.quoteText.replace(/;/gi, ","),
          a: response.quoteAuthor
        };
        if (response.quoteAuthor === "" || response.quoteAuthor === null) {
          quoteArray[index] = {
            q: response.quoteText.replace(/;/gi, ","),
            a: "unknown autor"
          };
        }
        index++;
      }
    }); // apiQuote

  }

  /*  animacia
   $(document).ready(function(){
    $('.but').click(function(){
      $('p').addClass("animated fadeOut");
      $('.name').addClass("animated fadeOut");
      window.setTimeout(function(){
        $('p').removeClass("animated fadeOut");
        $('.name').removeClass("animated fadeOut");
        var int = randnum(Object.keys(qts).length);
        $('p').html(qts[int][0]);
        $('.name').html(qts[int][1]);
        $('p').addClass("animated fadeIn");
        $('.name').addClass("animated fadeIn");
      }, 1000);

    });
  });
  */
  $('#prevQuote').click(function() {

    p++;
    console.log("pP " + p);

    if ((quoteArray.length - 1) - p >= 0) {
      $('#quote,#autor').fadeOut(500, function() {
        setQuote(p);
      });

    } else {
      p = quoteArray.length - 1;

    }
    $('#quote,#autor').fadeIn(1000);
    if ((quoteArray.length - 1) - p <= 0) {
      $('#prevQuote').addClass('empty');
    }

  });

  $('#newQuote').click(function() {
    console.log("p Click " + p);
    //
    p--;
    console.log("p Minus " + p);
    if (p < 0) {
      p = 0;
      $('#quote,#autor').fadeOut(500, function() {
        getQuote();
      });

    } else {
      $('#quote,#autor').fadeOut(500, function() {
        setQuote(p);
      });

    }
    $('#quote,#autor').fadeIn(1000);
    $('#prevQuote').removeClass('empty');

    console.log("p End " + p);
  });

  function setQuote(p) {
    $('#quote').text(quoteArray[(quoteArray.length - 1) - p].q);
    $('#autor').text(quoteArray[(quoteArray.length - 1) - p].a);
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

  function setIcon(height, width) {
    if (height > width) {

      // portrait
      $('#newQuote span').hide();
      $('#tweet span').hide();
      $('#prevQuote span').hide();
    } else {
      // landscape
      $('#newQuote span').show();
      $('#tweet span').show();
      $('#prevQuote span').show();
    }
  }
  $(window).resize(function() {
    console.log("resize");
    console.log("sh " + screen.height);
    console.log("sw " + screen.width);
    setIcon($(window).height(), $(window).width());

  });
})
