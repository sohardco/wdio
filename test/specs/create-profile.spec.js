import LandingPage from '../pageobjects/landing.page';
import CreateYourProfile from '../pageobjects/create-your-profile.page';
import { expect } from 'chai';

describe('mmm-graphicswizard-gl-web-qa signup', function() {
  before('Access login page',() => {
      LandingPage.open('');
      LandingPage.waitForLandingPageToLoad();
      LandingPage.signUpBtn.click();
  });

  it('should open reg page', () => {
    CreateYourProfile.waitForCreateProfilePageToLoad()
  });

})
