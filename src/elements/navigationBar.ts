import { Page } from "@playwright/test";

export class NavigationBar {
  constructor(protected readonly page: Page) {}

  public async buttonAgree() {
    await this.page.getByRole("button", { name: "Принять" }).click();
  }

  public async clickButtonBonus() {
    await this.page.locator("//li[@class='styles_navMenuItem__5EPNe']").click();
  }

  public async orderCall() {
    await this.page
      .locator("//*[@id='header']/div/div[1]/div/div/ul[2]/div/div/div/button")
      .click();
    await this.page
      .locator("//*[@id='dropdownCommunications']/ul/li[5]/button/span")
      .click();
    const inputName = this.page.locator("//input[@label = 'Имя']");
    await inputName?.fill("TEST");
    const inputPhone = this.page.locator("//input[@label = 'Номер телефона']");
    await inputPhone?.fill("1234567890");
    const inputMessage = this.page.locator("//textarea[@label = 'Сообщение']");
    await inputMessage?.fill("Тест");
    const chooseCheckbox = this.page.locator(
      "//span[@class='SvgIcon-module__base BaseCheckBox-module__uncheckedIcon styles-module__icon16']"
    );
    await chooseCheckbox?.click();
    const clickSend = this.page.locator(
      "//div[@class='Form-module__submitContainer']/button"
    );
    await clickSend?.click();
    this.page.locator("//h5[@class = 'SuccessScreen_successTitle__cCZL9']");
    this.page.locator("//p[@class = 'SuccessScreen_successText__iIC7L']");
    const clickClose = this.page.locator(
      "//button[@class = 'Button-module__button Button-module__blue-primary']"
    );
    await clickClose?.click();
  }

  public async clickContact() {
    await this.page
      .locator("//*[@id='header']/div/div[1]/div/div/ul[2]/div/div/div/button")
      .click();
    await this.page
      .locator("//a[@href='/services/contacts.html']/span")
      .click();
  }

  public async login() {
    const ButtonAccount = this.page.getByRole("button", { name: "Аккаунт" });
    await ButtonAccount.click();
    this.page.locator(
      "//div[@class='styles_list__X7MxD styles_list__RAL0l styles_center__1SELs styles_listSticky__SBchY styles_enterDone__5I8Ng']"
    );
    const buttonEnter = this.page.locator(
      '//div[@class="Button-module__buttonText"]/span'
    );
    await buttonEnter?.click();
    const titleModal = this.page.locator(
      '//h5[@class="Form-module__formTitle"]'
    );
    return await titleModal?.textContent();
  }
  public async inputdata() {
    const inputEmail = this.page.locator(
      '//div[@class="BaseInput-module__inputWrapper"]/input[@type="text"]'
    );
    await inputEmail?.fill("wixew53587@polatrix.com");
    const inputPasswotd = this.page.locator(
      '//div[@class="BaseInput-module__inputWrapper"]/input[@type="password"]'
    );
    await inputPasswotd?.fill("5e493fef");
    const clickButton = this.page.locator(
      '//button[@class="Button-module__button style_baseActionButton__VyAyj Button-module__blue-primary"]'
    );
    await clickButton?.click();
    this.page.locator(
      '//h5[@class="Form-module__formTitle PhoneEditorForm_title__VzIRo"]'
    );
    const clickClosePhone = this.page.locator(
      '//*[@id="modal"]/div[2]/div/div[1]/div[2]/button/div'
    );
    await clickClosePhone?.click();
  }
  public async checkUser() {
    const buttonAccount = this.page.getByRole("button", { name: "Аккаунт" });
    await buttonAccount.click();
    const userToolsTitle = this.page.locator('//div[@class="userToolsTitle"]');
    return await userToolsTitle?.textContent();
  }
  public async logOut() {
    return this.page.locator(
      '//a[@class="ProfileItem_itemCommon__DJPxF ProfileItem_itemLogout__RFHqc"]'
    );
  }

  public async getErrorLogin() {
    this.page.locator(
      '//div[@class="BaseInput-module__inputWrapper"]/input[@type="text"]'
    );
    const inputEmail = this.page.locator(
      '//div[@class="BaseInput-module__inputWrapper"]/input[@type="text"]'
    );
    await inputEmail?.fill("wixew53587@polatrix");
    const clickButton = this.page.locator(
      '//button[@class="Button-module__button style_baseActionButton__VyAyj Button-module__blue-primary"]'
    );
    await clickButton?.click();
    this.page.locator(
      '//div[@class="BaseInput-module__inputWrapper"]/input[@type="text"]'
    );
  }
  public async getErrorEmail() {
    const email = this.page.locator(
      '//div[@class= "ErrorMessage-module__error"]/*[text()[contains(.,"Неправильный формат электронной почты")]]'
    );
    return await email?.textContent();
  }
  public async getErrorPassword() {
    const password = this.page.locator(
      '//div[@class= "ErrorMessage-module__error"]/*[text()[contains(.,"Пароль не указан")]]'
    );
    return await password?.textContent();
  }

  public async signUp() {
    const buttonAccount = this.page.getByRole("button", { name: "Аккаунт" });
    await buttonAccount.click();
    this.page.locator(
      "//div[@class='styles_list__X7MxD styles_list__RAL0l styles_center__1SELs styles_listSticky__SBchY styles_enterDone__5I8Ng']"
    );
    const buttonEnter = this.page.locator(
      '//div[@class="Button-module__buttonText"]/span'
    );
    await buttonEnter?.click();
    const buttonSign = this.page.getByRole("button", { name: "Регистрация" });
    await buttonSign?.click();
    const signUpwindow = this.page.locator(
      '//h5[@class="Form-module__formTitle"]'
    );
    return await signUpwindow?.textContent();
  }
  public async signUpNewUser() {
    const inputUserEmail = this.page.locator(
      '//div[@class="BaseInput-module__inputWrapper"]/input'
    );
    await inputUserEmail?.fill("oztynay@mailto.plus");
    const buttonContinue = this.page.locator(
      '//button[@class="Button-module__button Button-module__blue-primary"]'
    );
    await buttonContinue.click();
    this.page.locator('//div[@class="styles_title__aaKSM"]');
    const buttonAgree = this.page.locator(
      '//button[@data-testid="agreeButton"]'
    );
    await buttonAgree?.click();
    this.page.locator(
      '//div[@class="BaseModalDesktop-module__modal ModalDesktop-module__smallModal AuthWrapper_modal__SpIQc BaseModalDesktop-module__animationFade BaseModalDesktop-module__animationFadeShow"]'
    );
    const success = this.page.locator(
      '//h5[@class="SuccessScreen_successTitle__cCZL9"]'
    );
    return await success?.textContent();
  }

  public async getErrorSignUp() {
    const inputUserEmail = this.page.locator(
      '//div[@class="BaseInput-module__inputWrapper"]/input'
    );
    await inputUserEmail?.fill("ayoqg@mailto.plus");
    const buttonContinue = this.page.locator(
      '//button[@class="Button-module__button Button-module__blue-primary"]'
    );
    await buttonContinue.click();
    const errorEmail = this.page.locator(
      '//span[@class="styles_errorText__LEN7M"]'
    );
    return await errorEmail.textContent();
  }

  public async getSearchItems() {
    const catalogSearch = this.page.locator("#catalogSearch");
    await catalogSearch.fill("Стайлеры");
    await this.page.keyboard.press("Enter");
    const search = this.page.getByText("Запрос «Стайлеры». Найдено");
    return await search.isVisible();
  }

  public async getModalLocation() {
    const buttonLocation = this.page.getByRole("button", { name: "г. Минск" });
    await buttonLocation.click();
    this.page.locator(
      '//div[@class="BaseModalDesktop-module__modal ModalDesktop-module__smallModal BaseModalDesktop-module__animationFade BaseModalDesktop-module__animationFadeShow"]'
    );
    const modalWindow = await this.page.locator(
      '//h5[@class="style_formTitle__qmgIN"]'
    );
    return await modalWindow.textContent();
  }
  public async changeLocation() {
    await this.page
      .locator('//div[@class="select__input-container css-1cfo1cf"]')
      .click();
    this.page.getByText(
      "г. Минскг. Брестг. Витебскг. Гомельг. Гродног. Могилевг. Барановичиг. Бобруйскг."
    );
    await this.page.locator("#react-select-2-option-1").click();
    this.page.locator(".select__input-container");
    await this.page.getByRole("button", { name: "Сохранить" }).click();
    const newCity = this.page.getByRole("button", { name: "г. Брест" });
    return newCity?.isVisible();
  }

  public async chooseItem() {
    await this.page.locator('//a[@data-index="12"]').click();
  }
  public async checkCartCount() {
    const cartCount = this.page.locator('//span[@class="headerCartCount"]');
    return await cartCount.textContent();
  }
  public async switchToCart() {
    await this.page.locator('//a[@class="headerCartBox"]').click();
  }
  public async deleteItem() {
    await this.page.locator('//button[@aria-label="Удалить товар"]').click();
    await this.page
      .locator(
        '//button[@class="Button-module__button Button-module__pink-primary"]'
      )
      .click();
    const cartEmpty = this.page.getByRole("heading", { name: "Корзина пуста" });
    return await cartEmpty?.textContent();
  }

  public async addItem() {
    await this.page
      .locator(
        '//button[@class="Button-module__button IconButton-module__iconButton IconButton-module__micro IconButton-module__round Button-module__gray-secondary"]'
      )
      .click();
    return this.page.locator(
      '//*[@id="content"]/div[3]/div/div/div[1]/div[2]/div[1]/div[2]/span'
    );
  }

  public async getPageBikes() {
    await this.page.locator('//a[@data-index = "3"]').click();
  }

  public async addFirstItem() {
    await this.page.locator('//a[@data-index = "5"]').click();
  }
  public async addSecondItem() {
    await this.page.locator('//a[@data-index = "7"]').click();
  }
  public async checkCountItems() {
    return await this.page
      .locator(
        '//*[@id="content"]/div[3]/div/div/div[1]/div[2]/div[2]/div[2]/span'
      )
      .textContent();
  }
}
