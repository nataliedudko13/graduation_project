import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { BONUS_URL } from "../consts/common.const";

export class BonusPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = BONUS_URL;
  }
  public async clickOnBonusProgramm() {
    const title = this.page.locator("#page_header");
    return await title?.textContent();
  }
}
