import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { REFRIGERATORS_URL } from "../consts/common.const";

export class RefrigeratorsPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = REFRIGERATORS_URL;
  }

  public async addFirst() {
    await this.page
      .locator('//*[@id="content"]/div/div[4]/div/div[1]/div[7]/button')
      .click();
    const Button = this.page
      .getByTestId("product-476171")
      .getByTestId("in-basket-button");
    return await Button.textContent();
  }
}
