$(document).ready(function(){
    function getQuote() {
      $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=?", function(json){
        $("#quote-text").html(json.quoteText);
        $("#quote-author").html(json.quoteAuthor);
        var tweetHref = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + json.quoteText + '" ' + json.quoteAuthor);
        $("#tweet").attr("href", tweetHref);
      });
    }
    getQuote();
    $("#get-quote").click(function() {
      $(".wrapper").css("opacity", 0);
      setTimeout(function() {
        getQuote();
      }, 500);
    });
    $("#get-quote").mouseenter(function() {
      $(".tooltip").html("Получить другую цитату").css("opacity", 1);
      $("#get-quote i").css("color", "#79C753");
      $("blockquote i").css("color", "#79C753");
    });
    $("#get-quote").mouseleave(function() {
      $(".tooltip").css("opacity", 0).html("");
      $("#get-quote i").css("color", "#616247");
      $("blockquote i").css("color", "#616247");
    });
    $("#tweet").mouseenter(function() {
      $(".tooltip").html("Опубликовать эту цитату в Твиттере").css("opacity", 1);
      $("#tweet i").css("color", "#41ABE1");
      $("blockquote i").css("color", "#41ABE1");
    });
    $("#tweet").mouseleave(function() {
      $(".tooltip").css("opacity", 0).html("");
      $("#tweet i").css("color", "#616247");
      $("blockquote i").css("color", "#616247");
    });
    $(document).ajaxComplete(function() {
      $(".wrapper").css("opacity", 1);
    });
  })