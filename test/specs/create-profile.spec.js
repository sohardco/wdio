import LandingPage from '../pageobjects/landing.page';
import CreateYourProfile from '../pageobjects/create-your-profile.page';
import { randomString, randomPhoneNumber, createRandomUrl, parseMailCode, fetchMail } from '../../utilities/mail-utilities';
import { expect } from 'chai';
const axios = require('axios');

describe('mmm-graphicswizard-gl-web-qa signup', function() {
  before('Access login page, create mail data',() => {
      LandingPage.open('');
      LandingPage.waitForLandingPageToLoad();
      LandingPage.signUpBtn.click();
  });

  let email = createRandomUrl(6, randomString);
  console.log(email[0], email[1])

  it('should open reg page', () => {
    CreateYourProfile.waitForCreateProfilePageToLoad()
  });

  it('should choose Installer', () => {
    CreateYourProfile.chooseInstaller()
  });


  it('should input Personal Data', () => {
    CreateYourProfile.fillPersonalInformation(email[0])

  });

  it('should accept TNC and opt in', () => {
    CreateYourProfile.acceptTnC()
    CreateYourProfile.optIn()
  })

  it('should submit form', () => {
    CreateYourProfile.submitForm()
    //browser.pause(20000)
  })

  it('should accept verification code', () => {

    const mailUrl = email[1]
    const output = browser.call(() => {

    //fetchMail(mailUrl, parseMailCode).then(res => console.log('Returned res: ',res))
    return fetchMail(mailUrl, parseMailCode)//.then(res => console.log("Returned promise: ", res))
      //console.log("mailres: ",typeof(mailres), mailres)
    //.then(res => console.log('This is res: ',res))

    //console.log("This is fetchres: ",response)
  })
    console.log('This is output: ',output)
    browser.pause(10000)
    CreateYourProfile.setValidationCode(output)

    browser.pause(5000)
    CreateYourProfile.submitForm()
  })
});
