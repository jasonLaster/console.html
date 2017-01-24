const {toolboxConfig} = require("./node_modules/devtools-launchpad/index");
const getConfig = require("./bin/getConfig");

const path = require("path");
const projectPath = path.join(__dirname, "src");

function buildConfig(envConfig) {
  let webpackConfig = {
    entry: {
      console: [path.join(projectPath, "toolbox.js")],
    },

    output: {
      path: path.join(__dirname, "assets/build"),
      filename: "[name].js",
      publicPath: "/assets/build"
    }
  };

  webpackConfig.resolve = {
    alias: {
      "devtools/client/webconsole/new-console-output": projectPath,
      "Services": path.join(__dirname, "node_modules/devtools-modules/client/shared/shim/Services"),
      //
      // // these path aliases are incredibly stupid and WILL be replaced soon
      "devtools/client/shared/redux/middleware/thunk": path.join(projectPath, "lib/thunk.js"),
      "devtools/shared/client/main": path.join(projectPath, "lib/main.js"),
      "devtools/client/shared/source-utils": path.join(projectPath, "lib/source-utils"),

    }
  };

  return toolboxConfig(webpackConfig, envConfig);
}


const envConfig = getConfig();
module.exports = buildConfig(envConfig)
