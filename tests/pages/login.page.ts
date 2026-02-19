// pages/login.page.ts
import { Page } from '@playwright/test';
import * as params from '../test_data/login.params.json';

export class LoginPage {
  readonly page: Page;
  readonly baseURL: string = params.url;
  readonly testUser = {
    username: params.username,
    password: params.password
  };

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Reusable navigation method to a specific path relative to the base URL.
   * @param path The relative path to navigate to (e.g., '/login').
   */
  async navigate(path: string): Promise<void> {
    const fullURL = `${this.baseURL}${path}`;
    await this.page.goto(fullURL);
  }

  /**
   * login
   */
  public async login() {
    this.navigate('');
    const usernameField = this.page.locator('#username');
    const passwordField = this.page.locator('#password');
    const submitButton = this.page.getByRole('button');

     //enter user name and password
     await usernameField.fill(this.testUser.username);
     await passwordField.fill(this.testUser.password);
     await submitButton.click();
  }
}
