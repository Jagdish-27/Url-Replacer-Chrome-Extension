console.log('Background file works fine');

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
  
  if (message.eventType === 'pageLoad') {
    const url = message.url;

    // http://10.0.1.208:8774/auth   
    if(url.startsWith('http://10.0.1.208:8774/auth')){
      let urlToOpen = url.replace('http://10.0.1.208:8774','http://localhost:4200');
      console.log('url to open',urlToOpen);

      chrome.tabs.create({url:urlToOpen});
      // chrome.windows.create({url:urlToOpen,type:'normal'});
      // window.open(urlToOpen,'_blank');
    }
  }
});

