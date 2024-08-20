import { Page, expect, test } from "@playwright/test";
import { StartPage } from "../../src/pages/startPage";
import { PageFactory } from "../../src/pages/pageFactory";
import { BASE_URL, CONTACTS_URL, Pages } from "../../src/consts/common.const";
import { ContactPage } from "../../src/pages/contactPage";

test.describe("Проверить работу кнопки Еще", () => {
  let startPage: StartPage;
  let contactPage: ContactPage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    startPage = PageFactory.getPage(page, Pages.StartPage) as StartPage;
    contactPage = PageFactory.getPage(page, Pages.ContactPage) as ContactPage;

    await startPage.viewPage();
  });

  test.beforeEach(async () => {
    await startPage.buttonAgree();
    expect(page).toHaveURL(BASE_URL);
  });

  test.afterAll(async () => {
    await startPage.closePage();
  });

  test("Заказать звонок на сайте", async () => {
    const getTitleWindow = await startPage.navigationBar.orderCall(); //
    expect(getTitleWindow).toBe;
  });

  test("Перейти на страницу контакты", async () => {
    await startPage.navigationBar.clickContact();
    await expect(page).toHaveURL(CONTACTS_URL);
    const getTitleContacs = await contactPage.getContactPage();
    expect(getTitleContacs).toContain("Контакты");
  });
});
