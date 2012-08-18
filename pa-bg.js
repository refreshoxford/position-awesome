/**
 * Sit in the background as a persistent key/value store
 */

// Set badge to plain text
chrome.browserAction.setBadgeText({text:'p:a'});

// Data storage
pub = {};

// Add a listener for Chrome extension requests
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if(request.msg == 'saveData') {
    pub.data = request.data;
  } else if(request.msg == 'loadData') {
    sendResponse(pub);
  }
});
