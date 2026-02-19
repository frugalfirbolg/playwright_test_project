import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { AppPage } from './pages/app.page';

test('Implement user authentication is in ToDo and has Feature and High Priority tags', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const appPage = new AppPage(page);

  await appPage.checkTask(
    'Implement user authentication',
    AppPage.toDoStatus,
    [AppPage.featureTag, AppPage.highPriorityTag]
  );
});

test('Fix navigation bug is in ToDo and has Bug tag', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const appPage = new AppPage(page);
  
  await appPage.checkTask(
    'Fix navigation bug',
    AppPage.toDoStatus,
    [AppPage.bugTag]
  );
});
