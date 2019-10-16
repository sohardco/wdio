import Page from './page';
import utl   from '../../utilities/common-utilities';

class CompanyInformation extends Page {

    //Location section
    get addLocation() { return $('.float-right .fa-plus[title="Add location"]'); }
    get removeLocation() { return $('.remove-icon .fa-trash-o[title="Remove location"]'); }
    get companyAdress() { return $("[formcontrolname='address']"); }
    get city() { return $("[formcontrolname='city']"); }
    get state() { return $("[formcontrolname='state']"); }
    get zipCode() { return $("[formcontrolname='zipCode']"); }
    get phone() { return $('#phone'); }
    get coverageArea() { return $("[formcontrolname='coverageArea']"); }
    get coverageRadius() { return $("[formcontrolname='coverageRadius']"); }

    //Popup selectors
    get coverageStates() { return $('[title="Choose states"]'); }
    get selectAllPupButton() { return $('.select-all-btn'); }
    get deselectAllPupButton() { return $('.deselect-all-btn'); }
    get doneBtn() { return $('.done-btn'); }

    //Application bay on premises
    get applicationBayOpen() { return $('.fa-caret-down'); }
    get carTile() { return $('.premises-tiles-container div:nth-child(1)'); }
    get truckTile() { return $('.premises-tiles-container div:nth-child(2)'); }
    get vanTile() { return $('.premises-tiles-container div:nth-child(3)'); }
    get busTile() { return $('.premises-tiles-container div:nth-child(4)'); }
    get trailer53() { return $('.premises-tiles-container div:nth-child(5)'); }
    get notClimateControlled() { return $('.climate-controlled-button.pull-left'); }
    get climateControlled() { return $('.climate-controlled-button.pull-right'); }
    get upload() { return $('#FileUpload'); }

    //General Information
    get companyName() { return $('[formcontrolname="name"]'); }
    get numberOfEmployees() { return $('[formcontrolname="employeesCount"]'); }
    get founded() { return $('[formcontrolname="foundedDate"]'); }
    //calendar
    get openCalendar() { return $('.fa-calendar-o'); }
    get calendarChevronLeft() { return $('.pi.pi-chevron-left'); }
    get calendarChevronRight() { return $('.pi.pi-chevron-right'); }
    get calendarDate() { return $('.ui-state-default.ng-tns-c13-0.ng-star-inserted'); }

    get website() { return $('[formcontrolname="website"]'); }
    get dontHaveWebsite() { return $('.dont-have-website'); }

    //Graphic Installer
    get texturedWalls() { return $('.competency-tile-container:first-child'); }
    get archSurface() { return $('.competency-tile-container:nth-child(2) div.competency-tile'); }
    get floorGraphics() { return $('.competency-tile-container:nth-child(3) div.competency-tile'); }
    get exteriorSign() { return $('.competency-tile-container:nth-child(4) div.competency-tile'); }
    get fleetGraphics() { return $('.competency-tile-container:nth-child(5) div.competency-tile'); }
    get vehicleGraphics() { return $('.competency-tile-container:nth-child(6) div.competency-tile'); }
    get wallCoverings() { return $('.competency-tile-container:nth-child(7) div.competency-tile'); }
    get wallGraphics() { return $('.competency-tile-container:nth-child(8) div.competency-tile'); }
    get glassOptionsWet() { return $('.competency-tile-container:nth-child(9) div.competency-tile'); }
    get glassOptionsDry() { return $('.competency-tile-container:nth-child(10) div.competency-tile'); }

    //Certificate (optional)
    get addCertification() { return $('.float-right .fa-plus[title="Add certification"]'); }
    get removeCertification() { return $('#installerCertificate .remove-icon .fa-trash-o[title="Remove"]'); }
    get selectInstallerCertificate() { return $('select[formcontrolname="id"]'); }
    get certDate() { return $('[formcontrolname="certificationDate"]'); }

    //Accreditations (optional)
    get addAccreditation() { return $('.float-right .fa-plus[title="Add accreditation"]'); }
    get removeAccreditation() { return $('#accreditations .remove-icon .fa-trash-o[title="Remove"]'); }
    get selectAccreditation() { return $('select[formcontrolname="id"]'); }
    get accreditationDate() { return $('[formcontrolname="accreditationDate"]'); }


    //Insuranse (optional)
    get standartInsuranse() { return $('.custom-radio:first-child div '); }
    get garageKeepersInsuranse() { return $('.custom-radio:last-child div '); }
    get provider() { return $('[formcontrolname="provider"]'); }
    get policyNumber() { return $('[formcontrolname="policyNumber"]'); }
    get expDate() { return $('[formcontrolname="expiryDate"]'); }
    get liabilityCoverage() { return $('[formcontrolname="coverage"]'); }
    get submit() { return $('.confirm-btn'); }

    setLocation() {
      this.companyAdress.setValue("277 3M Center")
      this.city.setValue("Maplewood")
      this.state.selectByAttribute('value', '24: MN')
      this.zipCode.setValue("55119")
      this.phone.setValue("1234234213")
    }

    setGeneralInfo() {
      this.companyName.setValue("AutoCompany")
      this.founded.click()
      this.calendarChevronLeft.click()
      this.website.setValue("www.autocompany.com")
    }

    chooseCompetency() {
      this.texturedWalls.click()
    }

    submit() {
      this.submit.click()
    }

}

export default new CompanyInformation()
