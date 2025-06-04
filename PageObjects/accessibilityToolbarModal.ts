import { expect, Locator, Page } from '@playwright/test';

export class AccessibilityToolbarObject {
    constructor(private page: Page) {}    
    
    //Locators
    private accessibilityToolbarHeaderLocator = "//p[contains(@class,'title')]";
    private keyboardNavigationLocator = "//label[@data-name='keyboard']";
    private disableAnimationsToggleLocator = "//label[@data-name='animations']";
    private contrastToggleLocator = "//label[@data-name='contrast']";
    private increaseFontToggleLocator = "//label[@data-name='incfont']";
    private decreaseFontToggleLocator = "//label[@data-name='decfont']";
    private readableFontToggleLocator = "//label[@data-name='readable']";
    private markTitlesToggleLocator = "//label[@data-name='marktitles']";
    private highlightLinksAndButtonsToggleLocator = "//label[@data-name='underline']";

    ///Getters
    public getHeader(){
        return this.page.locator(this.accessibilityToolbarHeaderLocator);
    }

    public getCloseButton(){
        return this.page.locator("//button[@id='acwp-close-toolbar']");
    }

    public async getKeyboardNavigationToggle(){
        let keyboarToggle = this.page.locator(this.keyboardNavigationLocator)
        await keyboarToggle.isVisible();
        return keyboarToggle;
    }

    public async getDisableAnimationsToggle(){
        let disableAnimationsToggle = this.page.locator(this.disableAnimationsToggleLocator)
        await disableAnimationsToggle.isVisible();
        return disableAnimationsToggle;
    }

    public async getContrastToggle(){
        let contrastToggle = this.page.locator(this.contrastToggleLocator)
        await contrastToggle.isVisible();
        return contrastToggle;
    }
    public async getIncreaseFontToggle(){
        let increaseFontToggle = this.page.locator(this.increaseFontToggleLocator)
        await increaseFontToggle.isVisible();
        return increaseFontToggle;
    }

    public async getDecreaseFontToggle(){
        let decreaseFontToggle = this.page.locator(this.decreaseFontToggleLocator)
        await decreaseFontToggle.isVisible();
        return decreaseFontToggle;
    }

    public async getReadableFontToggle(){
        let readableFontToggle = this.page.locator(this.readableFontToggleLocator)
        await readableFontToggle.isVisible();
        return readableFontToggle;
    }

    public async getMarkTitlesFontToggle(){
        let markTitlesToggle = this.page.locator(this.markTitlesToggleLocator)
        await markTitlesToggle.isVisible();
        return markTitlesToggle;
    }

    public async getHighlightLinksAndButtonsToggle(){
        let highlightLinksAndButtonsToggle = this.page.locator(this.highlightLinksAndButtonsToggleLocator)
        await highlightLinksAndButtonsToggle.isVisible();
        return highlightLinksAndButtonsToggle;
    }

    ///Actions

    ///Verifications
    public async verifyDefaultState() {
        await expect(await (this.getKeyboardNavigationToggle()), "verify that keyboard toggle is set to false by default").not.toBeChecked();
        await expect(await (this.getKeyboardNavigationToggle()), "verify that keyboard toggle is set to false by default").not.toBeChecked();
        await expect(await (this.getDisableAnimationsToggle()), "verify that disable animations toggle is set to false by default").not.toBeChecked();
        await expect(await (this.getContrastToggle()), "verify that contrast toggle is set to false by default").not.toBeChecked();
        await expect(await (this.getIncreaseFontToggle()), "verify that increase font toggle is set to false by default").not.toBeChecked();
        await expect(await (this.getDecreaseFontToggle()), "verify that decrease font toggle is set to false by default").not.toBeChecked();
        await expect(await (this.getReadableFontToggle()), "verify that readable font toggle is set to false by default").not.toBeChecked();
        await expect(await (this.getMarkTitlesFontToggle()), "verify that mark titles toggle is set to false by default").not.toBeChecked();
        await expect(await (this.getHighlightLinksAndButtonsToggle()), "verify that highlit links and buttons toggle is set to false by default").not.toBeChecked();
    }
}