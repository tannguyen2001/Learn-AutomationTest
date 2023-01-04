describe("API learning", () => {
  const MAX_WAITTIME = 5000;

  let pageUrl = "http://the-internet.herokuapp.com/";
  let formAuthencationLinkText = "a[href='/login']";
  let usernameSelector = "#username";
  let passwordSelector = "#password";
  let loginBtn = "button[type='submit']";

  it("click on Link test", async () => {
    // open browser with url

    await browser.url(pageUrl);

    // click on [form authentication] Link text
    await $(formAuthencationLinkText).waitForDisplayed(MAX_WAITTIME);
    await $(formAuthencationLinkText).click();
    // Input user name and password
    await $(usernameSelector).waitForDisplayed(MAX_WAITTIME);
    await $(usernameSelector).setValue("Tan Nguyen");
    await $(passwordSelector).setValue("Tan Nguyen");
    // click on the Login button

    await $(loginBtn).click();

    // pause browser

    await browser.pause(3000);
  });
});
