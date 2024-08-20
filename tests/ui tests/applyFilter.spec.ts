import { Page, expect, test } from "@playwright/test";
import { StartPage } from "../../src/pages/startPage";
import { PageFactory } from "../../src/pages/pageFactory";
import { BASE_URL, BIKES_URL, Pages } from "../../src/consts/common.const";
import { BikesPage } from "../../src/pages/bikesPage";

test.describe("Проверить применение фильтра", () => {
  let startPage: StartPage;
  let bikesPage: BikesPage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    startPage = PageFactory.getPage(page, Pages.StartPage) as StartPage;
    bikesPage = PageFactory.getPage(page, Pages.BikesPage) as BikesPage;

    await startPage.viewPage();
  });

  test.beforeEach(async () => {
    await startPage.buttonAgree();
    expect(page).toHaveURL(BASE_URL);
  });

  test.afterAll(async () => {
    await startPage.closePage();
  });

  test("Применить фильтр Спецпредложения = Суперцена", async () => {
    await startPage.navigationBar.getPageBikes();
    await bikesPage.applyFilterSuperPrice();
    const superPrice = page.locator(
      ' <div class="CardDiscountType_label__Z65eZ CardDiscountType_default__o7iqN ListingProduct_discountType__AWta_">Суперцена</div> aka getByTestId("product-7303161").getByText("Суперцена")'
    );
    expect(superPrice).toBeVisible;
  });
});
