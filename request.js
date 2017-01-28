function callNodeRemote(){
  var req = new XMLHttpRequest();
    req.open("POST", 'HTTP://WEB_PAGE', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    chrome.tabs.query({ active: true }, function(tabs){
      req.send('url=' + tabs[0].url);
    });
}

chrome.browserAction.onClicked.addListener(callNodeRemote);
