// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUW_8YAOW8DUl8bbpLT6v-LveuUXSv3IU",
    authDomain: "countdowngenshortlinks.firebaseapp.com",
    databaseURL: "https://countdowngenshortlinks.firebaseio.com",
    projectId: "countdowngenshortlinks",
    storageBucket: "countdowngenshortlinks.appspot.com",
    messagingSenderId: "313544877504",
    appId: "1:313544877504:web:c4652cb6620228e5809425"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//console.log(firebase);

var database = firebase.database();
var ref = database.ref("links");
ref.on("value", gotData, errData);

function gotData(data) {
    var scores = data.val();
    var keys = Object.keys(scores);
    //console.log(scores.code);
    for (let i = 0; i <= keys.length + 1; i++) {
        var k = keys[i];
        var longUrl = scores[k].lUrl;
        var code = scores[k].code;
        //console.log(longUrl + " : " + code);
        //console.log(code);
        var codeToGet = getQueryVariable("l");
        if (code == codeToGet) {
            document.location.href = longUrl;
            //console.log(gotCode);
        }
    }
}

function errData(err) {
    //console.log(err);
    //console.log("Error!");
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
