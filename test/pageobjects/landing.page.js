import Page from './page';
import utl   from '../../utilities/common-utilities';
import { expect } from 'chai';

class LandingPage extends Page {
    get signUpBtn() { return $('.landing-signup-btn'); }

    open(page) {
      super.open(page)
    }

    waitForLandingPageToLoad() {
      if(!this.signUpBtn.isDisplayed()){
        this.signUpBtn.waitForDisplayed(9000);
      }
    }
}

export default new LandingPage()
