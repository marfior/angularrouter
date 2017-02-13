import { AngularToDOPage } from './app.po';

describe('angular-to-do App', function() {
  let page: AngularToDOPage;

  beforeEach(() => {
    page = new AngularToDOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
