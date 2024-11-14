// ==UserScript==
// @name         Remove TradingView Chat Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the annoying chat button from TradingView pages
// @match        *.tradingview.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(() => {
        // Select the chat button using its data attribute
        const chatButton = document.querySelector('button[data-name="union_chats"]');
        if (chatButton) {
            chatButton.remove(); // Remove the chat button if found
            observer.disconnect(); // Stop observing after the button is removed
        }
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
})();
