$(document).ready(function(){
  var src = "test src data";
  chrome.extension.sendRequest({msg: 'saveData', data: src}, function(response) {});
});
