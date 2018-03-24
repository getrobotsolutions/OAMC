$(document).ready(function(){
    var city = "Muscat";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

    $.getJSON(queryURL, function (data) {
  
        var results = data.query.results
        var firstResult = results.channel.item.condition
        console.log(firstResult);
  
        var location = 'Unknown' // not returned in response
        var temp = firstResult.temp
        var text = firstResult.text
  
        $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°C</sup> Forecast calls for '+text);
  
    });

 });
 var vid = document.getElementById("bannerVideo");
    vid.playbackRate = 2;
    var interval = self.setInterval(function(){Play()},10000);

    function Play(){
          
          /*setTimeout(function(){*/
              vid.pause();
              vid.currentTime = 0;
              vid.play();
          /*}, 3300);*/
     }