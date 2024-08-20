import { Page, expect, test } from "@playwright/test";
import { StartPage } from "../../src/pages/startPage";
import { PageFactory } from "../../src/pages/pageFactory";
import { BASE_URL, FURNITURE_URL, Pages } from "../../src/consts/common.const";
import { CushionedFurniturePage } from "../../src/pages/cushionedFurniturePage";
import { OrderPage } from "../../src/pages/orderPage";
import { RefrigeratorsPage } from "../../src/pages/refrigeratorsPage";
import { TvPage } from "../../src/pages/tvPage";

test.describe("Проверка добавления товара в корзину", () => {
  let startPage: StartPage;
  let cushionedFurniturePage: CushionedFurniturePage;
  let orderPage: OrderPage;
  let refrigerators: RefrigeratorsPage;
  let tvPage: TvPage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    startPage = PageFactory.getPage(page, Pages.StartPage) as StartPage;
    cushionedFurniturePage = PageFactory.getPage(
      page,
      Pages.CushionedFurniturePage
    ) as CushionedFurniturePage;
    orderPage = PageFactory.getPage(page, Pages.OrderPage) as OrderPage;
    refrigerators = PageFactory.getPage(
      page,
      Pages.RefrigeratorsPage
    ) as RefrigeratorsPage;
    tvPage = PageFactory.getPage(page, Pages.TvPages) as TvPage;

    await startPage.viewPage();
  });

  test.beforeEach(async () => {
    await startPage.buttonAgree();
    expect(page).toHaveURL(BASE_URL);
  });

  test.afterAll(async () => {
    await startPage.closePage();
  });

  test("Изменить количество добавленного товара в корзине", async () => {
    await startPage.navigationBar.chooseItem();
    await expect(page).toHaveURL(FURNITURE_URL);
    await cushionedFurniturePage.changeCountItem();
    await startPage.navigationBar.checkCartCount();
    await startPage.navigationBar.switchToCart();
    const changeCount = await startPage.navigationBar.addItem();
    expect(changeCount).toContainText("Товары − 2 шт.");
  });
});
