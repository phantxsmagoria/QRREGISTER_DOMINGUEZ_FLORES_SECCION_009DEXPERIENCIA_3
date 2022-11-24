import { AppPage } from './app.po';

describe('Testeo', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Testeo 1', async () => {
    await page.navigateTo();
    expect(await page.getPrimero()).toContain('Bienvenido');
  });

  it('Testeo 2', async () => {
    await page.navigateTo();
    expect(await page.getSegundo()).toContain('INICIAR');
  });

  it('Testeo 3', async () => {
    await page.navigateTo();
    expect(await page.getTercero()).toContain('app');
  });
});
