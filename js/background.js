alert('hello');
var redirectUrl = chrome.identity.getRedirectURL();
var clientId = "vCFjtysw7DT47pPKwJPkVr8y9";
var authUrl = "https://api.twitter.com/oauth/authorize?" +
    "client_id=" + clientId + "&" +
    "response_type=token&" +
    "redirect_uri=" + encodeURIComponent(redirectUrl);

chrome.identity.launchWebAuthFlow({
        url: authUrl,
        interactive: true
    },

    function(responseUrl) {
        console.log(responseUrl);
        var accessToken = '40565949-42tfa74vgVLsEQzgELwfAzlkwDRUSdNlTNXXspF8o';
        console.log(accessToken);

        var api = new TwitterAPI(accessToken);
        api.request("statuses/home_timeline.json", undefined, function(data) {
            console.log(data);
            // output.textContent = JSON.stringify(data, null, 4);
        });
    });

var TwitterAPI = function(accessToken) {
    this.request = function(method, arguments, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            callback(JSON.parse(xhr.response));
        };

        xhr.open("GET", "https://api.twitter.com/1.1/" + method + "?access_token=" + accessToken);
        xhr.send();
    };
}