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
function createSLI(){
    var longUrl = document.getElementById('cntdn').value;
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
    var copyT = "https://countdowngen.xyz/s.html?l=" + sCode;
    copyToClipboard(copyT);

}
function copy() {
    var alrt = document.getElementById("alert");
/* Get the text field */
var copyText = document.getElementById("cntdn");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /*For mobile devices*/

/* Copy the text inside the text field */
document.execCommand("copy");
    alrt.classList.remove("invis");
    alrt.classList.add("alertcont");
    setTimeout(function() {
        alrt.classList.add("invis");
    alrt.classList.remove("alertcont");
}, 1900);
}


function copyToClipboard(text) {
    var alrt = document.getElementById("sAlert");
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alrt.classList.remove("invis");
    alrt.classList.add("alertcont");
    setTimeout(function() {
        alrt.classList.add("invis");
    alrt.classList.remove("alertcont");
}, 1900);
}


function randomStr(len, arr) { 
var ans = ''; 
for (var i = len; i > 0; i--) { 
    ans +=  
        arr[Math.floor(Math.random() * arr.length)]; 
} 
return ans; 
} 