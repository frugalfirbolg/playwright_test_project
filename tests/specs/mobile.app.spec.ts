import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AppPage } from '../pages/app.page';

const mobileAppProject = 'Mobile Application';

test('Push notification system is in ToDo and has Feature tag', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const appPage = new AppPage(page);
  await appPage.openProject('Mobile Application');

  await appPage.checkTask(
    'Push notification system',
    AppPage.toDoStatus,
    [AppPage.featureTag]
  );
});

test('Offline mode is In Progress and has Feature and High Priority tags', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const appPage = new AppPage(page);

  await appPage.openProject(mobileAppProject);

  await appPage.checkTask(
    'Offline mode',
    AppPage.inProgressStatus,
    [AppPage.featureTag, AppPage.highPriorityTag]
  );
});


test('App icon design is Done and has Design tag', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const appPage = new AppPage(page);

  await appPage.openProject(mobileAppProject);

  await appPage.checkTask(
    'App icon design',
    AppPage.doneStatus,
    [AppPage.designTag]
  );
});
