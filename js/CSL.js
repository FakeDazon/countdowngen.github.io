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


function createSL(){
    var longUrl = window.location.href;
    var database = firebase.database();
    var ref = database.ref('links');

    var sCode = randomStr(5, '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

    
    firebase.database().ref("links/" + sCode).set({
        code: sCode,
        lUrl: longUrl
    });
    var info = {
        shortCode: sCode,
        originalUrl: longUrl
    }
    console.log("successfuly created the shortened link:");
    console.log(info);

}



function randomStr(len, arr) { 
var ans = ''; 
for (var i = len; i > 0; i--) { 
    ans +=  
        arr[Math.floor(Math.random() * arr.length)]; 
} 
return ans; 
} 