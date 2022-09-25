//wird gecallt sobald die website das erste mal gelaunched wird
var searches_done = 0;
var startTime = Date.now();


chrome.storage.local.set({'BrowserStart' : startTime}, function(){
    console.log('Value is set to ' + startTime); 
})

chrome.history.onVisited.addListener(function(details) {
    searches_done = searches_done + 1;
    
    chrome.storage.local.set({'search' : searches_done}, function(){
        console.log('Value is set to ' + searches_done); 
    });
})

/*
function isYoutube(getURL){
	if(typeof getURL!=='string') return false;
	var newA = document.createElement('A');
	newA.href = getURL;
	var host = newA.hostname;
	var srch = newA.search;
	var path = newA.pathname;
	
	if(host.search(/youtube\.com|youtu\.be/)===-1) return "kein yt";
	if(host.search(/youtu\.be/)!==-1) return path.slice(1);
	if(path.search(/embed/)!==-1) return /embed\/([A-z0-9]+)(\&|$)/.exec(path)[1];
	var getId = /v=([A-z0-9]+)(\&|$)/.exec(srch);
	if(host.search(/youtube\.com/)!==-1) return !getId ? '':getId[1];
	
}


chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(window){
      window.tabs.forEach(function(tab){
        //collect all of the urls here, I will just log them instead
        //if tab.url is like
        //console.log(tab.url)
        isYoutube(tab.url)
      });
    });
})

*/