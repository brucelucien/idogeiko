import { IdogeikoPage } from './app.po';

describe('idogeiko App', () => {
  let page: IdogeikoPage;

  beforeEach(() => {
    page = new IdogeikoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('idk works!');
  });
});
