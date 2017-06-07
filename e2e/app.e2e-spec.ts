import { ProjectProductManagementPage } from './app.po';

describe('project-product-management App', () => {
  let page: ProjectProductManagementPage;

  beforeEach(() => {
    page = new ProjectProductManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
