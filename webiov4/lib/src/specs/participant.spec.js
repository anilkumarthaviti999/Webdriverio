"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partcipant_1 = require("../test/partcipant");
const adminpage_1 = require("../test/adminpage");
describe("participant", () => {
    let part;
    let admin;
    before(function () {
        part = new partcipant_1.participant();
        admin = new adminpage_1.adminpage();
    });
    it('creation', () => {
        admin.open();
        admin.login();
        browser.pause(5000);
        part.createparticipants();
    });
});
