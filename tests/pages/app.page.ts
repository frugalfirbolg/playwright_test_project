import { expect, Page } from '@playwright/test';

export class AppPage {
  readonly page: Page;
  public static toDoStatus = 'To Do';
  public static inProgressStatus = 'In Progress';
  public static reviewStatus = 'Review';
  public static doneStatus = 'Done';
  public static featureTag = 'Feature';
  public static bugTag = 'Bug';
  public static highPriorityTag = 'High Priority';
  public static designTag = 'Design';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * open
   * Implemented to open the desired project page
   */
  public async openProject(project: string) {
    await this.page.locator('button', { hasText: project }).click();
  }

  /**
   * checkTask
    @param task - the title of the task
    @param status - the status column that the task should be in
    @param tags - an array of tags that should be assigned to the task

  */
  public async checkTask(task: string, status: string, tags: string[]) {
    const statusDiv = this.page.locator('h2', { hasText: status }).locator('xpath=..');

    const taskHeader = statusDiv.getByText(task);
    await expect(taskHeader).toBeVisible();

    const taskBody = taskHeader.locator('xpath=..');

    for(const tag of tags) {
        const tagLoc = taskBody.getByText(tag, {exact: true});
        await expect(tagLoc).toBeVisible();
    }
  }

}