module.exports = {
  invokeClick: (element) => element.click(),
  typeText: (input) => (element) => element.sendKeys(input),
  getText: (element) => element.getText(),
};
