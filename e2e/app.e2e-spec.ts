import { SpringBootAngular2ClientPage } from './app.po';

describe('spring-boot-angular2-client App', function() {
  let page: SpringBootAngular2ClientPage;

  beforeEach(() => {
    page = new SpringBootAngular2ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
