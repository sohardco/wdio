import CompanyInformation from '../pageobjects/company-information.page';

describe('installer signup', function() {
  it('should set location',() => {
    CompanyInformation.setLocation()
  });

  it('should set general info',() => {
    CompanyInformation.setGeneralInfo()
  });

  it('should choose competency',() => {
    CompanyInformation.chooseCompetency()
  });

  it('should submit form',() => {
    CompanyInformation.submit()
  });

});
