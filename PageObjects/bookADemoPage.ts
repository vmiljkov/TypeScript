import { expect, Page } from '@playwright/test';
import { HomePage } from './homePage';
export class BookADemoPage {
    constructor(private page: Page) {
        this.page = page;
    }

    public async verifyCorrectURL() {
          await expect(this.page).toHaveURL(new HomePage(this.page).homePageURL + "book-a-demo/")
    }

    public async verifyHeadlineIsCorrect(){
          await expect(this.page.getByRole('heading', { name: 'Take your company knowledge to the next level.' })).toBeVisible();
    }

    public async verifyAllInputFieldsArePresentAndInteractable(){
        await expect(this.page.getByRole('heading', { name: 'Take your company knowledge to the next level.' })).toBeVisible();
        await expect(this.page.locator("//input[contains(@id, 'firstname')]")).toBeVisible();
        await expect(this.page.locator("//input[contains(@id, 'firstname')]")).toBeEditable();

        await expect(this.page.locator("//input[contains(@id, 'lastname')]")).toBeVisible();
        await expect(this.page.locator("//input[contains(@id, 'lastname')]")).toBeEditable();

        await expect(this.page.locator("//input[contains(@id, 'email')]")).toBeVisible();
        await expect(this.page.locator("//input[contains(@id, 'email')]")).toBeEditable();

        await expect(this.page.locator("//input[contains(@id, 'phone')]")).toBeVisible();
        await expect(this.page.locator("//input[contains(@id, 'phone')]")).toBeEditable();

        await expect(this.page.locator("//input[contains(@id, 'jobtitle')]")).toBeVisible();
        await expect(this.page.locator("//input[contains(@id, 'jobtitle')]")).toBeEditable();

        await expect(this.page.locator("//select[contains(@id, 'country')]")).toBeVisible();
        await expect(this.page.locator("//select[contains(@id, 'country')]")).toBeEditable();

        await expect(this.page.locator("//textarea[contains(@id, 'message')]")).toBeVisible();
        await expect(this.page.locator("//textarea[contains(@id, 'message')]")).toBeEditable();

        await expect(this.page.locator("//input[contains(@type, 'submit')]")).toBeVisible();
        await expect(this.page.locator("//input[contains(@type, 'submit')]")).toBeEnabled();    
    }
}