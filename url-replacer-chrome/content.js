
console.log("Content script is running");

chrome.runtime.sendMessage({
  eventType: "pageLoad",
  url: window.location.href,
})
