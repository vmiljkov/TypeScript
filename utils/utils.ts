import { Locator } from '@playwright/test';

export class Utils{

    public async getBackgroundColor(element:Locator){
        const backgroundColor = await element.evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('background-color');});
        return backgroundColor;
    }
}
