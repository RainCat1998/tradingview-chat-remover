// ==UserScript==
// @name         Remove TradingView Chat Button
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Removes the annoying chat button from TradingView pages
// @match        *.tradingview.com/*
// @grant        none
// @homepage     https://github.com/RainCat1998/tradingview-chat-remover
// @license MIT
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
