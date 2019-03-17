"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const componentbase_1 = require("./componentbase");
require('dotenv/config');
class adminpage extends componentbase_1.default {
    constructor() {
        super();
    }
    delay(ms) {
        return new Promise(res => setTimeout(res, ms));
    }
    open() {
        super.openurl();
    }
    get username() {
        return $('//input[@id="loginForm:username" and @name="loginForm:username"]');
    }
    get password() {
        return $('.passwordField');
    }
    get submitlnk() {
        return $('.loginButton');
    }
    get hierarchylink() {
        return $('div.rf-ac-itm-lbl-inact > table > tbody > tr > td');
    }
    get hfastsetup() {
        return $('*=Fast Setup');
    }
    get domain() {
        return $('//input[contains(@id,"domainNameField:domainNameInput")]');
    }
    get orgname() {
        return $('//input[contains(@id,"organizationNameField:organizationNameInput")]');
    }
    get dep() {
        return $('//input[contains(@id,"departmentNameField:departmentNameInput")]');
    }
    get div() {
        return $('//input[contains(@id,"divisionNameField:divisionName")]');
    }
    get savebtn() {
        return $('//input[contains(@value,"Save")]');
    }
    login() {
        this.username.waitForExist(5000);
        this.username.setValue('system');
        this.password.setValue('1234567890');
        this.submitlnk.click();
    }
    createhierachy() {
        console.log('we r');
        browser.pause(5000);
        this.hierarchylink.waitForExist(5000);
        this.hierarchylink.waitForVisible();
        this.hierarchylink.click();
        this.hfastsetup.waitForExist(5000);
        this.hfastsetup.click();
        this.domain.waitForExist(5000);
        this.domain.setValue('TP1');
        this.orgname.waitForExist(5000);
        this.orgname.setValue('TP1');
        this.dep.waitForExist(5000);
        this.dep.setValue('TP1');
        this.div.waitForExist(5000);
        this.div.setValue('TP1');
        this.savebtn.waitForExist(5000);
        this.savebtn.click();
        console.log('we r');
    }
}
exports.adminpage = adminpage;
