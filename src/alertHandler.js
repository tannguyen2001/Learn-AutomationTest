describe("API learning", () => {
  let pageURL = "https://the-internet.herokuapp.com";
  let jsLinkText = "=JavaScript Alerts";
  let jsConfirm = 'button[onclick="jsAlert()"]';

  it("Alert handler", async () => {
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
});
