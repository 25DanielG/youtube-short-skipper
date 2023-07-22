chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostEquals: 'www.youtube.com', pathPrefix: '/shorts/' },
                })
            ],
            actions: [new chrome.declarativeContent.RequestContentScript({ js: ['content.js'] })]
        }]);
    });
});