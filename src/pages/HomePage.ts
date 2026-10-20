import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async visit(): Promise<void> {
    await this.page.goto("/");
  }

  async verifyLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Playwright/);
  }
}
