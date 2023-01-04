describe("API learning", () => {
  let pageURL = "https://webdriver.io/";
  let docsBtn = "a[href='/docs/api']";

  it("Handler muntiple windows", async () => {
    // open the target page

    await browser.url(pageURL);

    // click on the edit button

    await $(docsBtn).waitForDisplayed(5000);
    await browser.newWindow("https://webdriver.io/docs/api", {
      windowName: "WebdriverIO window",
      windowFeature: "width=420,height=230,resizable,scrollbars=yes,status=1",
    });
    await browser.pause(3000);
    console.log("alo");
    await browser.pause(2000);

    // get all current windows ID/ array

    let allWindowIds = await browser.getWindowHandles();
    console.log("all windows", allWindowIds);

    let firtstWindow = allWindowIds[0];
    let secondWindow = allWindowIds[1];

    // switch to the seconds windows/ tabs

    await browser.switchToWindow(secondWindow);

    //  print out the 2nt window's title
    let secondWindowTitle = await browser.getTitle();
    console.log("title second window", secondWindowTitle);
    // switch to the 1st window
    await browser.switchToWindow(firtstWindow);

    // print out the 1st window's title
    let firstTitle = await browser.getTitle();
    console.log("frist  window", firstTitle);
    //pause(3000)
    browser.pause(3000);
  });
});
