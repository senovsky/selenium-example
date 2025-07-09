const { Builder, Browser } = require('selenium-webdriver');
const assert = require('assert');

const selectors = require('./selectors');
const utils = require('./utils');

describe('Test suit', () => {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });

  after(async function () {
    await driver.quit();
  });

  it('test case', async () => {
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

    let title = await driver.getTitle();
    assert.equal('Web form', title);

    await driver.manage().setTimeouts({ implicit: 4000 }); // increased to 4000 per Cypress.io best practices

    await selectors.textBox(driver).then(utils.typeText('Selenium'));
    await selectors.submitButton(driver).then(utils.invokeClick);

    const value = await selectors.message(driver).then(utils.getText);
    assert.equal('Received!', value);
  });
});
