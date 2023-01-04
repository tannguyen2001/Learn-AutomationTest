const path = require("path");

describe("API learning", () => {
  let pageUtl = "https://webdriver.io/docs/api/element/saveScreenshot/";
  let screenShotPath = "./Screenshot/test.png";

  it("Save screenshot", async () => {
    await browser.url(pageUtl);

    await browser.saveScreenshot(path.join(__dirname, screenShotPath));
  });
});
