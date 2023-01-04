exports.config = {
  //Test script
  specs: ["src/waitForDisplay.js"],

  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  runner: "local",

  //Declare server info
  hostname: "localhost",
  port: 9515,
  path: "//",

  //Test framework

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
};
