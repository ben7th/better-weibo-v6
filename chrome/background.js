chrome.pageAction.onClicked.addListener(function(tab){
  chrome.tabs.sendMessage(tab.id, {}, function(res){
    if(res.enabled){
      chrome.pageAction.setIcon({tabId: tab.id, path: "icons/icon_19_color.png"});
    } else {
      chrome.pageAction.setIcon({tabId: tab.id, path: "icons/icon_19_gray.png"});
    }
  })
});

chrome.runtime.onInstalled.addListener(function(){
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: 'weibo.com'},
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      } 
    ]);
  })
})