// background.js

// Example of a background task that logs a message when the extension is installed
chrome.runtime.onInstalled.addListener(function() {
    console.log("Task Manager extension installed.");
  });
  
  // Example of a background task that listens for messages from content scripts
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "performTask") {
      // Perform task based on message received from content script
      console.log("Performing task: " + message.task);
      // Send a response back to the content script
      sendResponse({ result: "Task completed" });
    }
  });
  