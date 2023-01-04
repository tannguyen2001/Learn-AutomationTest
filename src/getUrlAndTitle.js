describe("API learning", () => {
  let pageURL = "https://the-internet.herokuapp.com";
  let welcomeTextSlector = "h1";
  let currentUrl = "";
  let currentPageTitle = "";

  it("get url and title API", async () => {
    // open browser

    await browser.url(pageURL);
    await $(welcomeTextSlector).waitForDisplayed(5000);

    // get current page url and print out

    currentUrl = await browser.getUrl();

    // get the current page title and print out
    currentPageTitle = await browser.getTitle();

    console.log("current URL:", currentUrl);
    console.log("current Page title:", currentPageTitle);
  });
});
