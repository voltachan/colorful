// ==UserScript==
// @name         我要彩色
// @version      0.1
// @description  Color back
// @author       voltachan(https://github.com/voltachan)
// @match        http*://*/*
// @grant        GM_addStyle
// @run-at       document-start


// ==/UserScript==

(function() {
    GM_addStyle("*{filter:grayscale(0) !important;}");
})();
