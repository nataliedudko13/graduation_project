import { Page, expect, test } from "@playwright/test";
import { StartPage } from "../../src/pages/startPage";
import { PageFactory } from "../../src/pages/pageFactory";
import { BASE_URL, Pages } from "../../src/consts/common.const";

test.describe("Проверка авторизации пользователя", () => {
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

  test("Авторизация пользователя на сайте  https://www.21vek.by ", async () => {
    const login = await startPage.navigationBar.login();
    expect(login).toContain("Вход");
    await startPage.navigationBar.inputdata();
    await expect(page).toHaveURL(BASE_URL);
    const userToolsTitle = await startPage.navigationBar.checkUser();
    expect(userToolsTitle).toContain("Аккаунт");
    await startPage.navigationBar.logOut();
    expect(page).toHaveURL(BASE_URL);
  });

  test("Авторизоваться на сайте  https://www.21vek.by с незарегистрированной почтой", async () => {
    const login = await startPage.navigationBar.login();
    expect(login).toContain("Вход");
    const modalWindow = await startPage.navigationBar.getErrorLogin();
    expect(modalWindow).toBe;
    const errorEmail = await startPage.navigationBar.getErrorEmail();
    expect(errorEmail).toContain("Неправильный формат электронной почты");
    const errorPassword = await startPage.navigationBar.getErrorPassword();
    expect(errorPassword).toContain("Пароль не указан");
  });
});
