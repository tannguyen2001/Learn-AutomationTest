describe("API learning", () => {
  it("Set value to a textbox", async () => {
    let usernameSelector = "#username";
    browser.url("http://the-internet.herokuapp.com/login");
    await browser.pause(2000);
    $(usernameSelector).setValue("Nguyễn Văn Tân");
    await browser.pause(3000);
  });
});
