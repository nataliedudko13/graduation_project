import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { FURNITURE_URL } from "../consts/common.const";

export class CushionedFurniturePage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = FURNITURE_URL;
  }
  public async changeCountItem() {
    await this.page
      .locator('//*[@id="content"]/div/div[4]/div/div[1]/div[22]/button/div')
      .click();
    const changeButton = this.page
      .getByTestId("product-8180729")
      .getByTestId("in-basket-button");
    return await changeButton.textContent();
  }

  public async addItem() {
    await this.page
      .locator('//*[@id="content"]/div/div[4]/div/div[1]/div[22]/button')
      .click();
    const changeButton = this.page
      .getByTestId("product-8216472")
      .getByTestId("in-basket-button");
    return await changeButton.textContent();
  }
}
