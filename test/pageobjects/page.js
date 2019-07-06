export default class Page {

  get headerTitle() { return $('.header-title');}
  get avatar() { return $('.avatar.standalone');}
  get shevrone() { return $('.shevrone');}
  get avatarMenuProfile() { return $('.menu-block ul li:first-child');}
  get avatarMenuCompany() { return $('.menu-block ul li:nth-child(2)');}
  get avatarMenuSettings() { return $('.menu-block ul li:nth-child(3)');}
  get avatarMenuSignOut() { return $('.menu-block ul li:nth-child(4)');}

  get notifications() { return $('.notification-icon');}
  get pageNotFound() { return $('.not-found-message');}
  get takeToDashbrdBtn() { return $('.btn-take-dashboard');}

  open (path) {
    //http://www.phptravels.net/login
    browser.url(path)
  }

  goToDashbrd () {
    this.takeToDashbrdBtn.click()
  }

  logout () {
    this.shevrone.click()
    this.avatarMenuSignOut.click()
  }

}
