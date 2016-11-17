import { JLBikesAppPage } from './app.po';

describe('jl-bikes-app App', function() {
  let page: JLBikesAppPage;

  beforeEach(() => {
    page = new JLBikesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
