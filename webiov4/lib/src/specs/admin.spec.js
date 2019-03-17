"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminpage_1 = require("../test/adminpage");
const chai_1 = require("chai");
describe('open the url', () => {
    var index = 1;
    let admin;
    before(function () {
        admin = new adminpage_1.adminpage();
    });
    it('url', () => {
        chai_1.expect(index).to.equal(1);
        admin.open();
        admin.login();
        browser.pause(5000);
        index++;
        chai_1.expect(browser.getTitle()).to.contain('TDXchange');
    });
    it('creation of hierarchy', () => {
        chai_1.expect(index).to.equal(2);
        admin.createhierachy();
        console.log(browser.getTitle());
        index++;
        browser.pause(5000);
    });
});
