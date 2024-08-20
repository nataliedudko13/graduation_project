import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class StartPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = "https://www.21vek.by/";
  }
}
