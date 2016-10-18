import { AutoLabPage } from './app.po';

describe('auto-lab App', function() {
  let page: AutoLabPage;

  beforeEach(() => {
    page = new AutoLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
