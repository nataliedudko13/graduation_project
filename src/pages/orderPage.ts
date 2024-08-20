import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { ORDER_URL } from "../consts/common.const";

export class OrderPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = ORDER_URL;
  }
  public async deleteItem() {
    await this.page.locator('//button[@aria-label="Удалить товар"]').click();
    await this.page
      .locator(
        '//button[@class="Button-module__button Button-module__pink-primary"]'
      )
      .click();
    const messageEmpty = this.page.locator(
      "EmptyBasket_title__fTZV_ Title-module__title Title-module__h2"
    );
    return await messageEmpty.textContent();
  }
}
