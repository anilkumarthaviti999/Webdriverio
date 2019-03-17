"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const componentbase_1 = require("./componentbase");
class participant extends componentbase_1.default {
    constructor() {
        super(...arguments);
        this.name = 'TP1';
    }
    get participant() {
        return $('//div[@class="rf-ac-itm-lbl-act"]//td[contains(text(),"Participants")]');
    }
    get pfastsetup() {
        return $('//a[contains(@id,"participantFastSetup")]/span');
    }
    get imgicon() {
        return $('//input[contains(@name,"divisionNameField") and @type="image"]');
    }
    get selecttreenode() {
        return $('//span[contains(@id,"hierarchyForm:hierarchyTree:")]');
    }
    get participantname() {
        return $('//input[contains(@id,"participantNameField:participantName")]');
    }
    get Email() {
        return $('//input[contains(@id,"emailField:participantEmail")]');
    }
    get mslider() {
        return $('//div[@class="slider round"]');
    }
    get accessweb() {
        return $('//input[contains(@name,"mailboxEnabledInputField:mailboxEnabled")]');
    }
    get pswd() {
        return $('//input[contains(@id,"mailboxPasswordInputField:participantMailboxPassword")]');
    }
    get cpasswd() {
        return $('//input[contains(@id,"mailboxPasswordConfirmInputField:participantMailboxPasswordConfirm")]');
    }
    get type() {
        return $('//select[contains(@id,"participantTypeField:participantType")]');
    }
    get create() {
        return $('//input[@value="Create"]');
    }
    createparticipants() {
        this.participant.click();
        this.pfastsetup.click();
        browser.pause(5000);
        this.imgicon.click();
        browser.pause(5000);
        this.selecttreenode.click();
        browser.pause(5000);
        this.participantname.setValue('TP1');
        this.Email.setValue('anil.thaviti@valuelabs.com');
        this.mslider.click();
        browser.pause(5000);
        this.accessweb.click();
        browser.pause(5000);
        this.pswd.setValue('1234567890');
        this.cpasswd.setValue('1234567890');
        this.type.selectByIndex(1);
        this.create.click();
    }
}
exports.participant = participant;
