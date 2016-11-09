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
    "Services": path.join(__dirname, "node_modules/devtools-modules/client/shared/shim/Services"),

    // these path aliases are incredibly stupid and WILL be replaced soon
    "devtools/client/shared/redux/middleware/thunk": path.join(projectPath, "lib/thunk.js"),
    "devtools/client/shared/components/reps/rep": path.join(projectPath, "lib/reps/rep.js"),
    "devtools/client/shared/components/reps/rep-utils": path.join(projectPath, "lib/reps/rep-utils.js"),
    "devtools/client/shared/components/reps/string": path.join(projectPath, "lib/reps/string.js"),
    "devtools/client/shared/components/reps/grip": path.join(projectPath, "lib/reps/grip.js"),
    "devtools/shared/client/main": path.join(projectPath, "lib/main.js"),
    "devtools/client/shared/components/frame": path.join(projectPath, "lib/frame"),
    "devtools/client/shared/components/stack-trace": path.join(projectPath, "lib/stack-trace"),
    "devtools/client/shared/source-utils": path.join(projectPath, "lib/source-utils"),

  }
};

webpackConfig = toolboxConfig(webpackConfig);

module.exports = webpackConfig;
