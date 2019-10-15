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
console.log(firebase);

var database = firebase.database();
var ref = database.ref("links");
ref.on("value", gotData, errData);

function gotData(data) {
    var scores = data.val();
    var keys = Object.keys(scores);
    console.log(scores.code);
    for (let i = 0; i <= keys.length + 1; i++) {
        var k = keys[i];
        var longUrl = scores[k].lUrl;
        var code = scores[k].code;
        //console.log(longUrl + " : " + code);
        //console.log(code);
        if (code = "owo") {
            document.getElementById('code').textContent = i;
            gotCode = true;
            //console.log(gotCode);
        }
    }
}

function errData(err) {
    console.log(err);
    console.log("Error!");
}
