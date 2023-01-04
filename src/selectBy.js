describe("API learning", () => {
  let pageURL = "https://the-internet.herokuapp.com";
  let urlDropdown = "a[href='/dropdown']";
  let idDropdown = "#dropdown";
  it("Handler dropdown menu", async () => {
    await browser.url(pageURL);
    await $(urlDropdown).waitForDisplayed(5000);
    await $(urlDropdown).click();
    await $(idDropdown).waitForDisplayed(5000);
    await $(idDropdown).selectByVisibleText("Option 1");
    await browser.pause(1000);

    await $(idDropdown).selectByAttribute("value", "2");
    await browser.pause(3000);
  });
});
