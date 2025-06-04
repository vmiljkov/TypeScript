import { test, expect } from '@playwright/test';
import { HomePage } from '../PageObjects/homePage';
import { Utils } from '../utils/utils';
import { OurSolutionsMenu } from '../PageObjects/menus';
import { BookADemoPage } from '../PageObjects/bookADemoPage';
let homePage: HomePage;


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.navigateToHomePage();
});

test('Verify ROI Calculator', async ({ page }) => {
  //open ROI calculator
  const roiCalculator = await homePage.openROICalculatorPage();
  await roiCalculator.ClickCheckOurROIButton();

  //verify all fields can be used
  await roiCalculator.getSectionInput(await roiCalculator.getNumberOfFullEmployeesSection()).pressSequentially("1500");
  await roiCalculator.getSectionInput(await roiCalculator.getAverageEmployeeSalaryPerYearSection()).pressSequentially("40000");
  await roiCalculator.getSectionInput(await roiCalculator.getNumberOfFullTimeCallCenterAgentsSection()).pressSequentially("40000");
  await roiCalculator.getSectionInput(await roiCalculator.getAverageCallCenterAgentSalarySection()).pressSequentially("40000");
  await roiCalculator.getSectionInput(await roiCalculator.getNumberOfNewCallCenterAgentsSection()).pressSequentially("40000");
  await roiCalculator.getSectionInput(await roiCalculator.getCallCenterAgentOnboardingTimeSection()).pressSequentially("40000");
  await roiCalculator.getSectionInput(await roiCalculator.getOngoingTrainingSection()).pressSequentially("40000");
  await roiCalculator.getSectionInput(await roiCalculator.getErrorRateSection()).pressSequentially("40000");

  //verify calculations are correct
  await expect(await roiCalculator.getSavingsTotal()).toHaveText("$820,864,570,260");

  //click on Start Saving button
  (await roiCalculator.getStartSavingButton()).click();
  
  //verify we landed on Book A Demo page
  const bookDemoPage = new BookADemoPage(page);
  //verify URL is correct
  await bookDemoPage.verifyCorrectURL();

  //verify headline is correct
  await bookDemoPage.verifyHeadlineIsCorrect();
  
});

test('Verify Our Solutions Dropdown Menu Appear', async ({ page }) => {
  //verify Our Solutions Dropdown Menu content
  await homePage.getOurSolutionsLink().click();
  await homePage.verifyOurSolutionsMenu();

  //verify redirections
  //call center
  const ourSolutionsMenu = new OurSolutionsMenu(page);
  await ourSolutionsMenu.getCallCenterMenuItem().click();
  await expect(page).toHaveURL(homePage.homePageURL + "solution-call-center/")
  //self service
  await homePage.getOurSolutionsLink().click();
  await ourSolutionsMenu.getSelfServiceMenuItem().click();
  await expect(page).toHaveURL(homePage.homePageURL + "solution-self-service/")
  //onboarding
  await homePage.getOurSolutionsLink().click();
  await ourSolutionsMenu.getOnboardingAndTrainingeMenuItem().click();
  await expect(page).toHaveURL(homePage.homePageURL + "solution-onboarding/")
  //field service
  await homePage.getOurSolutionsLink().click();
  await ourSolutionsMenu.getFieldServiceMenuItem().click();
  await expect(page).toHaveURL(homePage.homePageURL + "solution-field-service/")

});

test('Verify Book a Demo page has all required fields and they are enabled', async ({}) => {

  //go to Book a Demo page
  let bookDemoPage = await homePage.clickBookADemoButton();
  
  //verify URL is correct
  await bookDemoPage.verifyCorrectURL();

  //verify headline is correct
  await bookDemoPage.verifyHeadlineIsCorrect();

  //Verify all fields are present and interactable
  await bookDemoPage.verifyAllInputFieldsArePresentAndInteractable();
   
});

test('Validate Default State of Accessibility Toggles', async ({}) => {

  ///Open accessibility modal
  let accessibilityToolbar = await homePage.clickAccessibilityButton();
  await expect (await (accessibilityToolbar.getHeader())).toBeVisible();

  //Verify default state
  await accessibilityToolbar.verifyDefaultState();

  ///click on the Underline Links toggle
  await (await accessibilityToolbar.getHighlightLinksAndButtonsToggle()).click();
 
  //verify toggle changed state
  await expect(await (accessibilityToolbar.getHighlightLinksAndButtonsToggle()), "verify that higlight toggle is changed").toBeChecked();
  
  //verify Links and buttons changed looks  
  let bgcolor  = await new Utils().getBackgroundColor(homePage.getLogoLink());
  console.log("----->" + bgcolor);
  expect(bgcolor).toBe("rgb(255, 233, 1)");
  
  await expect((homePage.getLogoLink()),"").toHaveCSS("background-color","rgb(255, 233, 1)");
  await expect((homePage.getLogoLink()),"").toHaveCSS("text-decoration-line","underline");
  await expect((homePage.getOurSolutionsLink()),"").toHaveCSS("background-color","rgb(255, 233, 1)");
  await expect((homePage.getOurSolutionsLink()),"").toHaveCSS("text-decoration-line","underline");
  await expect((homePage.getIntegrationsLink()),"").toHaveCSS("background-color","rgb(255, 233, 1)");
  await expect((homePage.getIntegrationsLink()),"").toHaveCSS("text-decoration-line","underline");
  await expect((homePage.getResourcesLink()),"").toHaveCSS("background-color","rgb(255, 233, 1)");
  await expect((homePage.getResourcesLink()),"").toHaveCSS("text-decoration-line","underline");

  //return it back and verify
  await (await accessibilityToolbar.getHighlightLinksAndButtonsToggle()).click();
  await expect((homePage.getLogoLink()),"").toHaveCSS("background-color","rgba(0, 0, 0, 0)");
  await expect((homePage.getLogoLink()),"").toHaveCSS("text-decoration-line","none");
  await expect((homePage.getOurSolutionsLink()),"").toHaveCSS("background-color","rgba(0, 0, 0, 0)");
  await expect((homePage.getOurSolutionsLink()),"").toHaveCSS("text-decoration-line","none");
  await expect((homePage.getIntegrationsLink()),"").toHaveCSS("background-color","rgba(0, 0, 0, 0)");
  await expect((homePage.getIntegrationsLink()),"").toHaveCSS("text-decoration-line","none");
  await expect((homePage.getResourcesLink()),"").toHaveCSS("background-color","rgba(0, 0, 0, 0)");
  await expect((homePage.getResourcesLink()),"").toHaveCSS("text-decoration-line","none");

  bgcolor  = await new Utils().getBackgroundColor(homePage.getLogoLink());
  console.log("----->" + bgcolor);
  expect(bgcolor).toBe("rgba(0, 0, 0, 0)");

});
