import { browser, element, by } from 'protractor';

export class IdogeikoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('idk-root h1')).getText();
  }
}
