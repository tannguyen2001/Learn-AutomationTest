describe("API", () => {
  const MAX_WAITTIME = 5000;

  let pageUrl = "http://the-internet.herokuapp.com/login";
  let formAuthencationLinkText = "a[href='/login']";
  let usernameSelector = "#username";
  let passwordSelector = "#password";
  let loginBtn = "button[type='submit']";
  let welcomeText = "h2";

  it("chờ cho component biến mất", async () => {
    await browser.url(pageUrl);

    //dang nhap
    await $(usernameSelector).waitForDisplayed(MAX_WAITTIME);
    await $(usernameSelector).setValue("tomsmith");
    await $(passwordSelector).setValue("SuperSecretPassword!");

    await $(loginBtn).click();

    //  kiem tra xem nut button co mat k
    $(usernameSelector).waitForDisplayed(5000, true, "qwkdwqd");
    // get the h1 text

    let welcomeTextValue = await $(welcomeText).getText();
    console.log(welcomeTextValue);
  });
});
