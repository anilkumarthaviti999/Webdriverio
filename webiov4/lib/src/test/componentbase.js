"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class componentbase {
    constructor() {
    }
    openurl() {
        browser.url('http://E14123S1L:8180/btrademft');
        browser.windowHandleMaximize();
        console.log('openurl login method');
    }
}
exports.default = componentbase;
