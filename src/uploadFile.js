let path = require("path");

describe("API learning", () => {
  let pageURL = "https://the-internet.herokuapp.com/upload";
  let chooseFileSelector = "#file-upload";
  let uploadBtnSelector = "#file-submit";

  it("Upload File", async () => {
    // open the upload page
    await browser.url(pageURL);
    // await $(chooseFileSelector).waitForDisplayed(5000);

    // set Value for file path
    let fileToUploadPath = path.join(__dirname, "./toUpload.txt");
    await $(chooseFileSelector).setValue(fileToUploadPath);
    // click on upload button
    await $(uploadBtnSelector).click();

    // pause browser
    await browser.pause(5000);
  });
});
