import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { TV_URL } from "../consts/common.const";

export class TvPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = TV_URL;
  }

  public async addSecond() {
    await this.page
      .locator('//*[@id="content"]/div/div[4]/div/div[1]/div[15]/button')
      .click();
    const Button = this.page
      .getByTestId("product-8025939")
      .getByTestId("in-basket-button");
    return await Button.textContent();
  }
}
