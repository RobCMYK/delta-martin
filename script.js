/* Version 0.0.2
Added some functions that counts the time a user
spends in total on the website in seconds*/



$( document ).ready(function() {
  
  $('.img-fluid').click( 
    function(
    ){
      console.log("position: ", $( '.img-fluid' ).position() );
    }
  ); 
  });

function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
      localStorage.clickcount = 1;
  }
    document.getElementById("result").innerHTML = "You am become death, destroyer of worlds " + localStorage.clickcount + " time(s).";
}  else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
}
}

var timer;
var timerStart;
var timeSpentOnSite = getTimeSpentOnSite();


function getTimeSpentOnSite(){
    timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
    timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
    return timeSpentOnSite;
}

function startCounting(){
    timerStart = Date.now();
    timer = setInterval(function(){
        timeSpentOnSite = getTimeSpentOnSite()+(Date.now()-timerStart);
        localStorage.setItem('timeSpentOnSite',timeSpentOnSite);
        timerStart = parseInt(Date.now());
        // Convert to seconds
        console.log(parseInt(timeSpentOnSite/1000));
    },1000);
}
startCounting();

var stopCountingWhenWindowIsInactive = true; 

if( stopCountingWhenWindowIsInactive ){

    if( typeof document.hidden !== "undefined" ){
        var hidden = "hidden", 
        visibilityChange = "visibilitychange", 
        visibilityState = "visibilityState";
    }else if ( typeof document.msHidden !== "undefined" ){
        var hidden = "msHidden", 
        visibilityChange = "msvisibilitychange", 
        visibilityState = "msVisibilityState";
    }
    var documentIsHidden = document[hidden];

    document.addEventListener(visibilityChange, function() {
        if(documentIsHidden != document[hidden]) {
            if( document[hidden] ){
                // Window is inactive
                clearInterval(timer);
            }else{
                // Window is active
                startCounting();
            }
            documentIsHidden = document[hidden];
        }
    });
}

document.getElementById("secondsWasted").innerHTML = "YOU HAVE SPENT " + Math.round(timeSpentOnSite/1000) + "  SECONDS ON THIS PAGE!";