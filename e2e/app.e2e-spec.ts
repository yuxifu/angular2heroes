import { Angular2heroesPage } from './app.po';

describe('angular2heroes App', () => {
  let page: Angular2heroesPage;

  beforeEach(() => {
    page = new Angular2heroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
