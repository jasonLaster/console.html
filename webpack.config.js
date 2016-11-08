const {webpackConfig: toolboxConfig} = require("devtools-local-toolbox");

const path = require("path");
const projectPath = path.join(__dirname, "src");

let webpackConfig = {
  entry: {
    bundle: [path.join(projectPath, "new-console-output-wrapper.js")],
  },

  output: {
    path: path.join(__dirname, "assets/build"),
    filename: "[name].js",
    publicPath: "/assets/build"
  }
};

webpackConfig.resolve = {
  alias: {
    "devtools/client/shared/vendor/react": "react",
    "devtools/client/shared/vendor/react-dom": "react-dom",
    "devtools/client/shared/vendor/react-redux": "react-redux",
    "devtools/client/shared/vendor/redux": "redux",
    "devtools/client/shared/vendor/immutable": "immutable",
    "devtools/client/webconsole/new-console-output": projectPath,
    "devtools/client/shared/redux/middleware/thunk": path.join(projectPath, "utils/thunk.js"),
    "Services": path.join(__dirname, "node_modules/devtools-modules/client/shared/shim/Services")
  }
};

webpackConfig = toolboxConfig(webpackConfig);

module.exports = webpackConfig;
