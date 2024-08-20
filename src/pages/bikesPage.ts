import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { BIKES_URL } from "../consts/common.const";

export class BikesPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.url = BIKES_URL;
  }
  public async applyFilterSuperPrice() {
    this.page.locator(
      '//*[@id="content"]/div/div[5]/div/div/div[5]/div[2]/div/div[2]/button/div[1]/label/span[1]'
    ).click;
    const superPrice = this.page.locator(
      ' <div class="CardDiscountType_label__Z65eZ CardDiscountType_default__o7iqN ListingProduct_discountType__AWta_">Суперцена</div> aka getByTestId("product-7303161").getByText("Суперцена")'
    );
    return superPrice;
  }
}
