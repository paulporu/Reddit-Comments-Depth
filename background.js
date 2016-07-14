chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if( details.url.includes("https://www.reddit.com/r/") && !details.url.includes("?depth=1")) {
      return {redirectUrl: details.url + "?depth=1" };
    }
  },
  {urls: ["https://www.reddit.com/*"]},
  ["blocking"]
);