document.getElementById('submit').addEventListener("click", function getFormData(break){
	var username = document.getElementById('username').value;
	var tweet = document.getElementById('tweet').value;
	var blockSize = tweet.length
	var tweets = [];
	tweets.append(tweet.substring(0,134))
	tweet.replace(tweet.substring(0,134),"");
});