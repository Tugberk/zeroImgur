var host = "https://i.0imgur.com";
chrome.webRequest.onBeforeRequest.addListener(function (details) {
  return { redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
}, {urls: ['*://*.imgur.com/*']}, ['blocking']);