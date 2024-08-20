import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { BONUS_URL, CONTACTS_URL } from "../consts/common.const";

export class ContactPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = CONTACTS_URL;
  }
  public async getContactPage() {
    const text = this.page.locator("//h1[@class='content__header']");
    return await text?.textContent();
  }
}
