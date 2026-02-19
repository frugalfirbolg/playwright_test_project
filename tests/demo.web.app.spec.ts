import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test('Implement user authentication is in ToDo and has Feature and High Priority tags', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const toDoDiv = page.locator('div', { 
    has: page.locator('h2', { hasText: 'To Do' }) 
  });

  const implementUserAuthentication = toDoDiv.getByText('Implement user authentication');
  await expect(implementUserAuthentication).toBeVisible();
  
  const parentContainer = implementUserAuthentication.locator('xpath=..');
  const featureTag = parentContainer.getByText('Feature', {exact: true});
  const highPriorityTag = parentContainer.getByText('High Priority', {exact: true});

  await expect(featureTag).toBeVisible();
  await expect(highPriorityTag).toBeVisible();
});

test('Fix navigation bug is in ToDo and has Bug tag', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();

  const toDoDiv = page.locator('div', { 
    has: page.locator('h2', { hasText: 'To Do' }) 
  });

  const fixNavBug = toDoDiv.getByText('Fix navigation bug');
  await expect(fixNavBug).toBeVisible();
  
  const parentContainer = fixNavBug.locator('xpath=..');
  const bugTag = parentContainer.getByText('Bug', {exact: true});

  await expect(bugTag).toBeVisible();
});
