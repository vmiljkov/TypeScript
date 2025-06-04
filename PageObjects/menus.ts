import { Locator, Page } from "@playwright/test";


export class OurSolutionsMenu {
    constructor(private page: Page) {}   

    //locators
    private callCenterMenuItemLocator = "//a[contains(@class, 'header_panel') and contains(@href, '/solution-call-center')]";
    private selfServiceMenuItemLocator = "//a[contains(@class, 'header_panel') and contains(@href, '/solution-self-service')]";
    private onboardingAndTrainingMenuItemLocator = "//a[contains(@class, 'header_panel') and contains(@href, '/solution-onboarding')]";
    private fieldServiceMenuItemLocator = "//a[contains(@class, 'header_panel') and contains(@href, '/solution-field-service')]";

    //Getters
    public getCallCenterMenuItem(){
        return this.page.locator(this.callCenterMenuItemLocator);
    }
    public getSelfServiceMenuItem(){
        return this.page.locator(this.selfServiceMenuItemLocator);
    }
    public getOnboardingAndTrainingeMenuItem(){
        return this.page.locator(this.onboardingAndTrainingMenuItemLocator);
    }
    public getFieldServiceMenuItem(){
        return this.page.locator(this.fieldServiceMenuItemLocator);
    }

    public async getMenuItemSubText(menuItem:Locator){
        return await menuItem.locator(">p").innerText();
    }
}

export class ResourcesMenu{
    constructor(private page: Page) {} 
    
    //locators
    private blogMenuItemLocator = "//a[contains(@class, 'header_panel') and contains(@href, '/blog')]";
    private ROICalculatorLocator = "//a[contains(@class, 'header_panel') and contains(@href, '/roi-calculator')]";

    //getters
    public getBlogMenuItem(){
        return this.page.locator(this.blogMenuItemLocator)
    }

    public getROICalculatorMenuItem() {
        return this.page.locator(this.ROICalculatorLocator)
    }
}