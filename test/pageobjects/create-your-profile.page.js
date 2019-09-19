import Page from './page';
import utl   from '../../utilities/common-utilities';

class CreateYourProfile extends Page {
    get installerTile() { return $('.role-tile.Installer'); }
    get manufacturerTile() { return $('.role-tile.Manufacturer'); }
    get bothTile() { return $('.role-tile.Both'); }
    get subscriberTile() { return $('.role-tile.Subscriber'); }

    get firstName() { return $("[formcontrolname = 'firstName']"); }
    get lastName() { return $("[formcontrolname = 'lastName']"); }
    get phoneNumber() { return $("[]"); }
    get email() { return $("[formcontrolname='emailAddress']"); }
    get country() { return $("[formcontrolname='country']"); }

    get password() { return $("[formcontrolname='password']"); }
    get confirmPassport() { return $("[formcontrolname='certainPassword']"); }

    //TnC popup block
    get tnc() { return $('.checkmark'); }
    get popupBody() { return $('.modal-body.tos-modal-body')}
    get popupContentDisagree() { return $('.button-3m-submit.disagree'); }
    get popupContentAgree() { return $('.button-3m-submit.accept-tos'); }

    //Tri-state checkbox
    get triStateMsg() { return $('.form-check-label.pl-0'); }
    get checkmarkInterminate() { return $('.checkmark.interminate'); }
    get checkmarkChecked() { return $('.checkmark.checked'); }

    get checkmarkUnchecked() { return $('.checkmark'); }
    get mailCode() { return $("[formcontrolname='code']"); }
    get resendMail() { return $('.lets-send-it-again'); }
    get submit() { return $('.confirm-btn'); }

    open(){
      super.open('')
    }

    waitForCreateProfilePageToLoad() {
      if(!this.triStateMsg.isDisplayed()){
        this.triStateMsg.waitForDisplayed(9000);
      }
    }
}

export default new CreateYourProfile()
