// pages/login.page.ts
import { Page } from '@playwright/test';
import * as params from '../data/login.params.json';

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
   * login
   */
  public async login() {
    await this.page.goto(`${this.baseURL}`);
    const usernameField = this.page.locator('#username');
    const passwordField = this.page.locator('#password');
    const submitButton = this.page.getByRole('button');

     //enter user name and password
     await usernameField.fill(this.testUser.username);
     await passwordField.fill(this.testUser.password);
     await submitButton.click();
  }
}
