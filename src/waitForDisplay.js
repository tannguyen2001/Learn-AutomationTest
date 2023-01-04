describe("Lerning API", () => {
  let loginUrl = "http://the-internet.herokuapp.com/login";
  let usernameSelector = "#username";
  let passwordSelector = "#password";

  it("waitForDisplay", async () => {
    //Open the login page
    await browser.url(loginUrl);
    // wait for the input username displayed

    await $(usernameSelector).waitForDisplayed(5000);
    await $(passwordSelector).waitForDisplayed(5000);

    // set value

    await $("#username").setValue("Nguyễn Văn Tân");
    await $(passwordSelector).setValue("tannguyen2001");

    //pause browser

    await browser.pause(5000);
  });
});
