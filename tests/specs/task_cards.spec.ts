import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AppPage } from '../pages/app.page';
import data from '../data/task_cards.json';

interface TaskCard {
  test: string,
  task: string,
  project: string,
  status: string,
  tags: string[]
}

const taskCards: TaskCard[] = data;

test.describe('Data-Driven Task Card Tests', () => {
    for (const taskCard of taskCards) {
        
        test(taskCard.test, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.login();

            const appPage = new AppPage(page);

            await appPage.openProject(taskCard.project);

            await appPage.checkTask(
                taskCard.task,
                taskCard.status,
                taskCard.tags
            );
        });
    }
});