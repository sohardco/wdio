
//import Page from '../pageobjects/page';
import LoginPage from '../pageobjects/login.page';
//import assert from 'assert';
import utl from '../../utilities/common-utilities';
//var utl = require('../../utilities/common-utilities');
import { expect } from 'chai';


/*
	This is a BDD test using Mocha JavaScript framework
*/
/*describe('mmm-graphicswizard-gl-web-qa login popup', function() {
  it('should not allow user to login with inexist credentials', function(){

  });
});*/

describe('mmm-graphicswizard-gl-web-qa login popup', function() {
  before('Access login page',() => {
      LoginPage.open('');
      LoginPage.waitForloginPageToLoad();
      LoginPage.landingLoginBtn.click();
  });
  /*afterEach ('Drop login popup',() => {
      LoginPage.closePopup.click()
  });*/

  it('should not allow to login without email', () => {
      LoginPage.login(undefined,'foobar');
      LoginPage.checkErrorMsg('Error\nThe EmailAddress field is required.');
  });

  it('should not allow to login without password', () => {
      LoginPage.login('jd23@getnada.com', undefined);
      LoginPage.checkErrorMsg('Error\nThe Password field is required.');
  });

  it('should not allow to login with invalid credentials', () => {
      LoginPage.login('foo@bar.com','foobar');
      LoginPage.checkErrorMsg('Error\nUsername or Password is incorrect. Please check your sign-in credentials.');
  });

  it('should not allow to reset email which is not exist', () => {
      LoginPage.resetPassword.click();
      LoginPage.usernameInput.setValue('foo@bar.com');
      LoginPage.sendEmailBtn.click();
      LoginPage.checkErrorMsg('Error\nEmail address is incorrect');
      LoginPage.returnToLogin.click();
  })

  it('should not allow to pass incorrect email format', () => {
      LoginPage.resetPassword.click();
      const formValidation = LoginPage.formError
      LoginPage.usernameInput.setValue('foo@')
      formValidation.waitForDisplayed()
      expect(formValidation.getText()).to.equal('Invalid email format.');
      LoginPage.returnToLogin.click();
  });

  it('should allow user to login with valid credentials ', () => {
      LoginPage.login('jd23@getnada.com', 'Password1!');    // entering user name, password and and submiting the page
      LoginPage.isLoggedIn();
  });

});
