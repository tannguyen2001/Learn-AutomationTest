const path = require("path");

describe("API learning", () => {
  it("Alert handler", async () => {
    let pageURL = "https://the-internet.herokuapp.com";
    let jsLinkText = "=JavaScript Alerts";
    let jsConfirm = 'button[onclick="jsAlert()"]';

    await browser.url(pageURL);

    await $(jsLinkText).waitForDisplayed(5000);
    await $(jsLinkText).click();

    // open the alert

    await $(jsConfirm).waitForDisplayed(5000);
    await $(jsConfirm).click();

    // alert test

    let alertText = await browser.getAlertText();
    console.log("alert content", alertText);
    await browser.pause(2000);

    // OK/ accep in alert
    await browser.acceptAlert();
    await browser.pause(2000);

    // click open alert again
    await $(jsConfirm).click();
    await browser.pause(2000);

    browser.dismissAlert();

    browser.pause(4000);
  });

  it("Upload File", async () => {
    let pageURL = "https://the-internet.herokuapp.com/upload";
    let chooseFileSelector = "#file-upload";
    let uploadBtnSelector = "#file-submit";

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
