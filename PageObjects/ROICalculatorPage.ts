import { Locator, Page } from "@playwright/test";

export class ROICalculator {
    constructor(private page: Page) {}

    //locators
    private CheckOurROIButtonLocator = "//a[@href='#roi']"
    
    public async getNumberOfFullEmployeesSection(){
        return this.page.locator("//p[contains(text(),'Full Time Employees')]/ancestor::section[contains(@class,'inner')]");
    }
    
    public async getAverageEmployeeSalaryPerYearSection(){
        return this.page.locator("//p[contains(text(),'Average Employee Salary Per Year')]/ancestor::section[contains(@class,'inner')]");
    }

    public async getNumberOfFullTimeCallCenterAgentsSection(){
        return this.page.locator("//p[contains(text(),'Number of Full Time Call Center Agents')]/ancestor::section[contains(@class,'inner')]");
    }

    public async getAverageCallCenterAgentSalarySection(){
        return this.page.locator("//p[contains(text(),'Average Call Center Agent Salary')]/ancestor::section[contains(@class,'inner')]");
    }

    public async getNumberOfNewCallCenterAgentsSection(){
        return this.page.locator("//p[contains(text(),'Number of New Call Center Agents')]/ancestor::section[contains(@class,'inner')]");
    }

    public async getCallCenterAgentOnboardingTimeSection(){
        return this.page.locator("//p[contains(text(),'Call Center Agent Onboarding Time')]/ancestor::section[contains(@class,'inner')]");
    }

    public async getOngoingTrainingSection(){
        return this.page.locator("//p[contains(text(),'Ongoing Training')]/ancestor::section[contains(@class,'inner')]");
    }

    public async getErrorRateSection(){
        return this.page.locator("//p[contains(text(),'Error Rate')]/ancestor::section[contains(@class,'inner')]");
    }

    public async getSavingsTotal(){
        return this.page.locator("//div[@id='savings-roi_calc__total']/div/p");
    }

    public async getStartSavingButton(){
        return this.page.getByText("Start Saving");
    }
    public getSectionInput(section:Locator) {
        return section.locator("div>div>input");
    }

    //actions
    public async ClickCheckOurROIButton(){
        await this.page.locator(this.CheckOurROIButtonLocator).click();
    }
    
}