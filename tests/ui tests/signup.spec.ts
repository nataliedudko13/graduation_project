import { Page, expect, test } from "@playwright/test";
import { StartPage } from "../../src/pages/startPage";
import { PageFactory } from "../../src/pages/pageFactory";
import { BASE_URL, Pages } from "../../src/consts/common.const";

test.describe("Проверка регистрации пользователя", () => {
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

  test("Регистрация пользователя на сайте https://www.21vek.by", async () => {
    const signUp = await startPage.navigationBar.signUp();
    expect(signUp).toContain("Регистрация");
    const newUser = await startPage.navigationBar.signUpNewUser();
    expect(newUser).toContain("Вы зарегистрированы");
  });

  test("Регистрация пользователя на сайте https://www.21vek.by с уже существующим аккаунтом", async () => {
    const signUp = await startPage.navigationBar.signUp();
    expect(signUp).toContain("Регистрация");
    const errorSignUp = await startPage.navigationBar.getErrorSignUp();
    expect(errorSignUp).toContain("Проверьте электронную почту или ");
  });
});
