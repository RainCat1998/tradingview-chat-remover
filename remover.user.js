// ==UserScript==
// @name         Delete Tradingview Chat Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Delete Chat Button on Tradingview
// @match        *.tradingview.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Using MutationObserver to observer DOM changes
    const observer = new MutationObserver(() => {
        const chatButton = document.querySelector('button[data-name="union_chats"]');
        const ideaButton = document.querySelector('button[data-name="ideas_stream"]');
        if (chatButton && ideaButton) {
            chatButton.remove(); // delete chat button
            ideaButton.remove(); // delete ideas stream button
            observer.disconnect(); // disconnect the observer
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
