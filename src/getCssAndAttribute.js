describe("API learning", () => {
  let pageURL = "http://the-internet.herokuapp.com/";
  let h1Text = "h1";

  it("Get color css value", async () => {
    await browser.url(pageURL);

    await $(h1Text).waitForDisplayed(5000);

    let colorValue = await $(h1Text).getCSSProperty("color");
    console.log("color:", colorValue.parsed.hex);
  });

  it("Get attribute", async () => {
    // tuong tu
    //exampe
    // let b = $(name).getAttribute()
  });
});
