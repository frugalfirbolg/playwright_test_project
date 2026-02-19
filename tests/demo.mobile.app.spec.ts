import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test('Push notification system is in ToDo and has Feature tag', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const mobApp = page.getByText('Mobile Application', {exact: true});
  await mobApp.click();

  const toDoDiv = page.locator('div', { 
    has: page.locator('h2', { hasText: 'To Do' }) 
  });

  const pushNotificationSystem = toDoDiv.getByText('Push notification system');

  await expect(pushNotificationSystem).toBeVisible();

  const parentContainer = pushNotificationSystem.locator('xpath=..');
  const featureTag = parentContainer.getByText('Feature', {exact: true});

  await expect(featureTag).toBeVisible();
});

test('Offline mode is In Progress and has Feature and High Priority tags', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const mobApp = page.getByText('Mobile Application', {exact: true});
  await mobApp.click();

  const inProgressDiv = page.locator('div', { 
    has: page.locator('h2', { hasText: 'In Progress' }) 
  });

  const offlineMode = inProgressDiv.getByText('Offline mode');

  await expect(offlineMode).toBeVisible();

  const parentContainer = offlineMode.locator('xpath=..');
  const featureTag = parentContainer.getByText('Feature', {exact: true});
  const highPriorityTag = parentContainer.getByText('High Priority', {exact: true});

  await expect(featureTag).toBeVisible();
  await expect(highPriorityTag).toBeVisible();
});


test('App icon design is Done and has Design tag', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const mobApp = page.getByText('Mobile Application', {exact: true});
  await mobApp.click();

  const doneDiv = page.locator('div', { 
    has: page.locator('h2', { hasText: 'Done' }) 
  });

  const appIconDesign = doneDiv.getByText('App icon design');

  await expect(appIconDesign).toBeVisible();

  const parentContainer = appIconDesign.locator('xpath=..');
  const designTag = parentContainer.getByText('Design', {exact: true});

  await expect(designTag).toBeVisible();
});
