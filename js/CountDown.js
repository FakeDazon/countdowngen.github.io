function countdown(){
    var titleVar = getQueryVariable("t");
    var monthVar = getQueryVariable("m");
    var dayVar = getQueryVariable("d");
    var yearVar = getQueryVariable("y");
    var now = new Date();
    var eventDate = new Date(yearVar,monthVar - 1,dayVar);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime-currentTime;

    var s = Math.floor(remTime/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);
    var d = Math.floor(h/24);

    h %= 24; m %= 60; s %= 60;
    h = (h<10) ? "0" + h:h; m = (m<10) ? "0" + m:m; s = (s<10) ? "0" + s:s;          //updates h, m, and s

    document.getElementById("time").textContent = d + ":" + h + ":" + m + ":" + s;   //changes the time on the timer
    setTimeout(countdown,100);                                                       //updates the timer
}
countdown();
function onStart(){
    var titleVar = getQueryVariable("t");
    var monthVar = getQueryVariable("m");
    var dayVar = getQueryVariable("d");
    var yearVar = getQueryVariable("y");
    var accentColor = getQueryVariable("c");
    var bgColor = getQueryVariable("b");
    console.log("title: " + titleVar + " date: " + monthVar + "/" + dayVar + "/" + yearVar);
    document.getElementById("title").innerHTML = titleVar.replace("%20", " ");                          //Sets the color for all of the components
    document.getElementById("daysuntil").style.color = "#" + accentColor;
    document.getElementById("title").style.color = "#" + accentColor;
    document.getElementById("time").style.color = "#" + accentColor;
    document.getElementById("bottom").style.color = "#" + accentColor;
    document.getElementById("watermark").style.color = "#" + accentColor;
    document.body.style.backgroundColor = "#" + bgColor;
}
onStart();
function getQueryVariable(variable)
{
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable){return pair[1];}
}
return(false);
}