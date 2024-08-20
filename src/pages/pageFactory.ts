import { Page } from "@playwright/test";
import { StartPage } from "./startPage";
import { Pages } from "../consts/common.const";
import { BonusPage } from "./bonusPage";
import { ContactPage } from "./contactPage";
import { CushionedFurniturePage } from "./cushionedFurniturePage";
import { BikesPage } from "./bikesPage";
import { RefrigeratorsPage } from "./refrigeratorsPage";
import { TvPage } from "./tvPage";

export class PageFactory {
  static getPage(page: Page, pageName: Pages) {
    switch (pageName) {
      case Pages.StartPage:
        return new StartPage(page);

      case Pages.BonusPage:
        return new BonusPage(page);

      case Pages.ContactPage:
        return new ContactPage(page);

      case Pages.CushionedFurniturePage:
        return new CushionedFurniturePage(page);

      case Pages.BikesPage:
        return new BikesPage(page);

      case Pages.RefrigeratorsPage:
        return new RefrigeratorsPage(page);

      case Pages.TvPages:
        return new TvPage(page);
    }
  }
}
