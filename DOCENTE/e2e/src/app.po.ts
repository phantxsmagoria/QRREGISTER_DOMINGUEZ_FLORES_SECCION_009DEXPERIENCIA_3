import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getPrimero():Promise<string>{
    return element(by.css('app-root b')).getText();
  }

  async getSegundo():Promise<string>{
    return element(by.css('app-root ion-button')).getText();
  }

  async getTercero():Promise<string>{
    return element(by.css('app-root p')).getText();
  }


}
 