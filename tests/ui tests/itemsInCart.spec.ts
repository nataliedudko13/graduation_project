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

  test("Добавить 1 товар из каталога в корзину + удаление товара из корзины", async () => {
    await startPage.navigationBar.chooseItem();
    await expect(page).toHaveURL(FURNITURE_URL);
    const checkItem = await cushionedFurniturePage.addItem();
    expect(checkItem).toContain("В корзине");
    const buttonCartCount = await startPage.navigationBar.checkCartCount();
    expect(buttonCartCount).toContain("1");
    await startPage.navigationBar.switchToCart();
    const cart = page.locator(
      '//*[@id="content"]/div[1]/div/button[1]/span/span[1]'
    );
    await expect(cart).toHaveText("Корзина");
    const count = page.locator('//span[@class="Tabs-module__counter"]');
    await expect(count).toHaveText("1");
    const messageEmpty = await startPage.navigationBar.deleteItem();
    expect(messageEmpty).toContain("Корзина пуста");
  });

  test("Добавить 2 разных товара в корзину", async () => {
    await startPage.navigationBar.addFirstItem();
    const ItemFirst = await refrigerators.addFirst();
    expect(ItemFirst).toContain("В корзине");
    await startPage.navigationBar.addSecondItem();
    const ItemSecond = await tvPage.addSecond();
    expect(ItemSecond).toContain("В корзине");
    await startPage.navigationBar.switchToCart();
    const countItem = await startPage.navigationBar.checkCountItems();
    expect(countItem).toContain("Товары − 2 шт.");
  });
});
