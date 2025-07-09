const { By } = require('selenium-webdriver');

module.exports = {
  submitButton: (driver) => driver.findElement(By.css('button')),
  textBox: (driver) => driver.findElement(By.name('my-text')),
  message: (driver) => driver.findElement(By.id('message')),
};
