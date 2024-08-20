import { Page, expect, test } from "@playwright/test";
import { StartPage } from "../../src/pages/startPage";
import { PageFactory } from "../../src/pages/pageFactory";
import { BASE_URL, Pages } from "../../src/consts/common.const";

test.describe("Проверить кнопку населенный пункт", () => {
  let startPage: StartPage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    startPage = PageFactory.getPage(page, Pages.StartPage) as StartPage;

    await startPage.viewPage();
  });

  test.beforeEach(async () => {
    await startPage.buttonAgree();
    expect(page).toHaveURL(BASE_URL);
  });

  test.afterAll(async () => {
    await startPage.closePage();
  });

  test("Изменить населенный пункт", async () => {
    const getModalWindow = await startPage.navigationBar.getModalLocation();
    expect(getModalWindow).toContain("Населенный пункт");
    await startPage.navigationBar.changeLocation();
    expect(page).toHaveURL(BASE_URL);
    const newCity = page.getByRole("button", { name: "г. Брест" });
    expect(newCity).toBeVisible();
  });
});
