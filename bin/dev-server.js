const fs = require("fs");
const path = require("path");

const toolbox = require("../node_modules/devtools-local-toolbox/index");
const feature = require("devtools-config");

function getConfig() {
  const developmentConfig = require("../configs/development.json");
  return developmentConfig;
}

const devConfig = getConfig();
feature.setConfig(devConfig);

const webpackConfig = require("../webpack.config");

toolbox.startDevServer(devConfig, webpackConfig);
