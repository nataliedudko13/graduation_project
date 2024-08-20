import { Page, expect, test } from "@playwright/test";
import { StartPage } from "../../src/pages/startPage";
import { PageFactory } from "../../src/pages/pageFactory";
import { BASE_URL, Pages } from "../../src/consts/common.const";

test.describe("Поверить поиск товара", () => {
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

  test("Поиск товара на сайте https://www.21vek.by", async () => {
    await startPage.navigationBar.getSearchItems();
    const getResults = page.getByText("Запрос «Стайлеры». Найдено");
    expect(getResults).toBeVisible;
  });
});
