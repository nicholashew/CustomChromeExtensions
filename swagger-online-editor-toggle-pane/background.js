// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: `
          var pane2 = document.querySelector('.swagger-editor .Pane2');	
          
          if (pane2) {
            pane2.style.width = pane2.style.width === '50%' ? '100%' : '50%';
          }
          `    
  });
});