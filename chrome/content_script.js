if(localStorage['weibo_adjust_disabled']) {
  document.getElementsByTagName('html')[0].className = '';
  chrome.extension.sendMessage({enabled: false});
} else {
  document.getElementsByTagName('html')[0].className = 'weibo_adjust_enabled';
  chrome.extension.sendMessage({enabled: true});
}

chrome.extension.onMessage.addListener(function(res, sender, send_response){
  if(localStorage['weibo_adjust_disabled']) {
    localStorage.removeItem('weibo_adjust_disabled');
    document.getElementsByTagName('html')[0].className = 'weibo_adjust_enabled';
    send_response({enabled: true});
  } else {
    localStorage['weibo_adjust_disabled'] = true;
    document.getElementsByTagName('html')[0].className = '';
    send_response({enabled: false});
  }
})