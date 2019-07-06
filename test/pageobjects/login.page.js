import Page from './page';
import utl   from '../../utilities/common-utilities';
import { expect } from 'chai';


class LoginPage extends Page {

    /**
    * define elements
    */
    //Popup selectors
    get landingLoginBtn() { return $('.landing-login-btn');}
    get usernameInput()   { return $('#login-email'); }
    get passwordInput()   { return $('#login-password'); }
    get resetPassword ()  { return $('.password-reset.text-yellow'); }
    get logInNowBtn()  { return $('.landing-button'); }
    get contactSupport()  { return $('.text-yellow[routerlink="/external_support"]'); }
    get faq()             { return $('.text-yellow[routerlink="/external_support/faq"]'); }
    get returnToLogin() { return $('.text-yellow')}
    get sendEmailBtn() { return $('button.landing-button'); }
    get closePopup() { return $('.modal.landing-login-popup-window'); }

    // Validation & notifications
    get notificationContainer() { return $('.simple-notification.notification-3m.error'); }
    get formError() { return $('span.ng-star-inserted'); }

    //get takeToDashbrdBtn() { return super.takeToDashbrdBtn} span.ng-star-inserted
    /**
     * define or overwrite page methods
     */
    open () {
        super.open('')       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    waitForloginPageToLoad () {
      if(!this.landingLoginBtn.isDisplayed()){
        this.landingLoginBtn.waitForDisplayed(9000);

      }
    }


    goToDashbrd() {
      if(this.takeToDashbrdBtn.isDisplayed()){
        super.goToDashbrd()
      }


    }

    login(email, password) {
      //this.waitForloginPageToLoad();
      //this.landingLoginBtn.click();
      this.usernameInput.setValue(email);
      this.passwordInput.setValue(password);
      this.logInNowBtn.click();
    }

    checkErrorMsg(message) {
      let errorText = this.notificationContainer.getText()
      expect(errorText).to.equal(message)
      this.notificationContainer.click()
      browser.waitUntil(() => {
        return !this.notificationContainer.isExisting();
      });
    }

    isLoggedIn(){
        var home = super.headerTitle

        browser.waitUntil(() => {
            return home.isExisting();
        })

      expect(home.getText()).to.equal('Home')
    }
}

export default new LoginPage()
