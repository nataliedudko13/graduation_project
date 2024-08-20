import { Page } from "@playwright/test";
import { NavigationBar } from "../elements/navigationBar";

export class BasePage {
  protected url!: string;

  public navigationBar: NavigationBar;
  static buttonAgree: any;

  constructor(protected page: Page) {
    this.navigationBar = new NavigationBar(page);
  }

  public async viewPage() {
    await this.page.goto(this.url);
  }
  public async buttonAgree() {
    await this.page.getByRole("button", { name: "Принять" }).click();
  }

  public async closePage() {
    return await this.page.close();
  }
}
