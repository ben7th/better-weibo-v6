// 在微博网站显示图标
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

function set_icon(enabled, tab) {
  if(enabled){
    chrome.pageAction.setIcon({tabId: tab.id, path: "icons/icon_19_color.png"});
  } else {
    chrome.pageAction.setIcon({tabId: tab.id, path: "icons/icon_19_gray.png"});
  }
}

// 点击时改变图标
chrome.pageAction.onClicked.addListener(function(tab){
  chrome.tabs.sendMessage(tab.id, {}, function(res){
    set_icon(res.enabled, tab);
  })
});

chrome.extension.onMessage.addListener(function(request, sender, res){
  set_icon(request.enabled, sender.tab);
})