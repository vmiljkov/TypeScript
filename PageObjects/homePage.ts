import { test, expect, Page } from '@playwright/test';
import { BookADemoPage } from './bookADemoPage';
import { AccessibilityToolbarObject } from './accessibilityToolbarModal';
import { OurSolutionsMenu, ResourcesMenu } from './menus';
import { ROICalculator } from './ROICalculatorPage';

export class HomePage {
    constructor(private page: Page) {
        this.page = page;
    }
    homePageURL = 'https://kmslh.com/';
    

    title = /Knowledge Management System - KMS Lighthouse/;

    //getters
    public getHeader(){
        return this.page.locator("//p[contains(@class,'title')]");
    }

    public getCloseButton(){
        return this.page.locator("//button[@id='acwp-close-toolbar']");
    }

    public getAccessibilityButton(){
        return this.page.locator("//button[@id='acwp-toolbar-btn']");
    }

    public getLogoLink(){
        return this.page.locator("//div[@class='container']/div/a[contains(@class,'header')]");
    }

    public getOurSolutionsLink(){
        return this.page.locator("//a[contains(@class, 'header_panel') and contains(text(), 'Our Solutions')]");
    }

    public getIntegrationsLink(){
        return this.page.locator("//a[contains(@class, 'header_panel') and contains(@href, 'ntegrations')]");
    }

    public getResourcesLink(){
        return this.page.locator("//a[contains(@class, 'header_panel') and contains(text(), 'Resources')]");
    }

    //Actions
    public async navigateToHomePage(){
        await this.page.goto(this.homePageURL);
    }
    
    public async clickBookADemoButton(){
        await this.page.locator("//header//a[contains(@href, '/book-a-demo')]").click();
        return new BookADemoPage(this.page);
    }

    public async clickAccessibilityButton() {
        await this.getAccessibilityButton().click();
        return new AccessibilityToolbarObject(this.page);
    }

    public async openROICalculatorPage(){
        await this.getResourcesLink().click();
        await new ResourcesMenu(this.page).getROICalculatorMenuItem().click();
        return new ROICalculator(this.page);
    }

    // verifications

    public async verifyTitle(){
        await expect(this.page).toHaveTitle(/Knowledge Management System - KMS Lighthouse/);
    }

    public async verifyOurSolutionsMenu(){
        let ourSolutionsMenu = new OurSolutionsMenu(this.page)

        await expect(ourSolutionsMenu.getCallCenterMenuItem()).toBeVisible();
        await expect(ourSolutionsMenu.getCallCenterMenuItem()).toContainText("Call Center");
        await expect(ourSolutionsMenu.getCallCenterMenuItem()).toContainText("Cut call center holding times by 40");

        await expect(ourSolutionsMenu.getSelfServiceMenuItem()).toBeVisible();
        await expect(ourSolutionsMenu.getSelfServiceMenuItem()).toContainText("Self Service");
        await expect(ourSolutionsMenu.getSelfServiceMenuItem()).toContainText("Empower your customers with 24/7 knowledge");

        await expect(ourSolutionsMenu.getOnboardingAndTrainingeMenuItem()).toBeVisible();
        await expect(ourSolutionsMenu.getOnboardingAndTrainingeMenuItem()).toContainText("Onboarding & Training");
        await expect(ourSolutionsMenu.getOnboardingAndTrainingeMenuItem()).toContainText("Cut onboarding and training times by up to 70%");

        await expect(ourSolutionsMenu.getFieldServiceMenuItem()).toBeVisible();
        await expect(ourSolutionsMenu.getFieldServiceMenuItem()).toContainText("Field Service");
        await expect(ourSolutionsMenu.getFieldServiceMenuItem()).toContainText("Reduce your field teams time-on-site by 60%");

    }
}