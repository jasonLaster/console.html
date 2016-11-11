const fs = require("fs");
const path = require("path");

const toolbox = require("../node_modules/devtools-local-toolbox/index");
const feature = require("devtools-config");

function getConfig() {
  const developmentConfig = require("../configs/development.json");
  return developmentConfig;
}

const envConfig = getConfig();
feature.setConfig(envConfig);

const webpackConfig = require("../webpack.config")(envConfig);

toolbox.startDevServer(envConfig, webpackConfig);
