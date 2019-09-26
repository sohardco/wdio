import Page from './page';
import utl   from '../../utilities/common-utilities';
import { randomPhoneNumber, mailHost, createRandomUrl, randomString } from '../../utilities/mail-utilities';

class CreateYourProfile extends Page {
    get installerTile() { return $('.role-tile.Installer'); }
    get manufacturerTile() { return $('.role-tile.Manufacturer'); }
    get bothTile() { return $('.role-tile.Both'); }
    get subscriberTile() { return $('.role-tile.Subscriber'); }

    get firstName() { return $("[formcontrolname = 'firstName']"); }
    get lastName() { return $("[formcontrolname = 'lastName']"); }
    get phoneNumber() { return $('#phone1'); }
    get phoneTwoButton() { return $('.add-phone2-button'); }
    get phoneNumberTwo() { return $('#phone2'); }
    get email() { return $("[formcontrolname='emailAddress']"); }
    get country() { return $("[formcontrolname='country']"); }

    get password() { return $("[formcontrolname='password']"); }
    get confirmPassword() { return $("[formcontrolname='certainPassword']"); }

    //TnC popup block
    get tnc() { return $('.checkmark'); }
    get popupBody() { return $('.modal-body.tos-modal-body')}
    get popupScrollContentToBottom() { return $('.tos-modal-body ol li:last-child')}
    get popupContentDisagree() { return $('.button-3m-submit.disagree'); }
    get popupContentAgree() { return $('.button-3m-submit.accept-tos'); }

    //Tri-state checkbox
    get triStateMsg() { return $('.form-check-label.pl-0'); }
    get checkmarkIndeterminate() { return $('.checkmark.indeterminate'); }
    get checkmarkChecked() { return $('.checkmark.checked'); }

    get checkmarkUnchecked() { return $('.checkmark'); }
    get mailCode() { return $("[formcontrolname='code']"); }
    get resendMail() { return $('.lets-send-it-again'); }
    get submitButton() { return $('.confirm-btn'); }

    open() {
      super.open('')
    }

    waitForCreateProfilePageToLoad() {
      if(!this.triStateMsg.isDisplayed()){
        this.triStateMsg.waitForDisplayed(9000);
      }
    }

    chooseInstaller() {
      this.installerTile.click()
    }

    chooseManufacturer() {
      this.manufacturerTile.click()
    }

    chooseBoth() {
      this.bothTile.click()
    }

    chooseSubscriber() {
      this.subscriberTile.click()
    }

    fillPersonalInformation(mailcode) {
      this.firstName.setValue('autoFirst');
      this.lastName.setValue('autoLast');

      let number = randomPhoneNumber();

      this.phoneNumber.setValue(number);
      this.email.setValue(mailcode + mailHost);
      this.password.setValue('Password1!');
      this.confirmPassword.setValue('Password1!');
    }

    acceptTnC() {
      this.tnc.click()
      this.popupScrollContentToBottom.click()
      this.popupContentAgree.click()
    }

    optIn() {
      this.checkmarkIndeterminate.click()
    }

    submitForm() {
      this.submitButton.click()
    }

    setValidationCode(code) {
      this.mailCode.setValue(code)
    }

}

export default new CreateYourProfile()
