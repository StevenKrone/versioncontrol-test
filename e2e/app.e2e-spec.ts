import { NgTrPage } from './app.po';

describe('ng-tr App', function() {
  let page: NgTrPage;

  beforeEach(() => {
    page = new NgTrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
