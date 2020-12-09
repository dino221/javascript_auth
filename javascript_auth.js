var userName = "clientID";
var passWord = "secretKey";

function authenticateUser(user, password)
{
    var token = user + ":" + password;

    //Base64 encoding ->btoa
    var hash = btoa(token);

    return "Basic" + hash;

}
function CallWebAPI() {
    // Needed HTTP request
    var request = new XMLHttpRequest();
    request.open("POST", "https://xxx123.caspio.com/oauth/token", false);
    request.setRequestHeader("Authorization", authenticateUser(userName, passWord));
    request.send();
    // view request status
    alert(request.status);
    Response.innerHTML = request.responseText;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var token_ // variable will store the token
var userName = "clientID"; // app clientID
var passWord = "secretKey"; // app clientSecret
var caspioTokenUrl = "https://xxx123.caspio.com/oauth/token"; // Your application token endpoint  
var request = new XMLHttpRequest(); 

function getToken(url, clientID, clientSecret) {
    var key;           
    request.open("POST", url, true); 
    request.setRequestHeader("Content-type", "application/json");
    request.send("grant_type=client_credentials&client_id="+clientID+"&"+"client_secret="+clientSecret); // specify the credentials to receive the token on request
    request.onreadystatechange = function () {
        if (request.readyState == request.DONE) {
            var response = request.responseText;
            var obj = JSON.parse(response); 
            key = obj.access_token; //store the value of the accesstoken
            token_ = key; // store token in your global variable "token_" or you could simply return the value of the access token from the function
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Get the token
getToken(caspioTokenUrl, userName, passWord);


function CallWebAPI() {
    var request_ = new XMLHttpRequest();        
    var encodedParams = encodeURIComponent(params);
    request_.open("GET", "https://xxx123.caspio.com/rest/v1/tables/", true);
    request_.setRequestHeader("Authorization", "Bearer "+ token_);
    request_.send();
    request_.onreadystatechange = function () {
        if (request_.readyState == 4 && request_.status == 200) {
            var response = request_.responseText;
            var obj = JSON.parse(response); 
            // handle data as needed... 

        }
    }
} 
