import { BrainstormrAngularPage } from './app.po';

describe('brainstormr-angular App', () => {
  let page: BrainstormrAngularPage;

  beforeEach(() => {
    page = new BrainstormrAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
