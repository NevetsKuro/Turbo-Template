const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MESSAGE: process.env.NEXT_PUBLIC_MESSAGE
  }
});
