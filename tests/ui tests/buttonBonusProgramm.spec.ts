import { Page, expect, test } from "@playwright/test";
import { StartPage } from "../../src/pages/startPage";
import { PageFactory } from "../../src/pages/pageFactory";
import { BASE_URL, BONUS_URL, Pages } from "../../src/consts/common.const";
import { BonusPage } from "../../src/pages/bonusPage";

test.describe("Проверить работу кнопки Бонусная программа", () => {
  let startPage: StartPage;
  let bonusPage: BonusPage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    startPage = PageFactory.getPage(page, Pages.StartPage) as StartPage;
    bonusPage = PageFactory.getPage(page, Pages.BonusPage) as BonusPage;

    await startPage.viewPage();
  });

  test.beforeEach(async () => {
    await startPage.buttonAgree();
    expect(page).toHaveURL(BASE_URL);
  });

  test.afterAll(async () => {
    await startPage.closePage();
  });

  test("Проверить кнопку Бонусная программа", async () => {
    await startPage.navigationBar.clickButtonBonus();
    await expect(page).toHaveURL(BONUS_URL);
    const getBonespage = await bonusPage.clickOnBonusProgramm();
    expect(getBonespage).toContain("Получайте бонусы за покупки");
  });
});
