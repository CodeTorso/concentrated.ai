console.log('Hello from the background script!')

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed or updated.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTabs") {
    console.log("get Tabs!");
    chrome.tabs.query({}, (tabs) => {
      sendResponse(tabs);
    });
    // Required to indicate you will send a response asynchronously
    return true;
  } else if (message.action === "removeTab" && message.tabId) {
    console.log("Delete a Tab!");
    chrome.tabs.remove(message.tabId, () => {
      sendResponse({ status: "success" });
    });
    // chrome.tabs.
    return true;
  }
});