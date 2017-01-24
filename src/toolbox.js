const React = require("react");

const { bindActionCreators, combineReducers } = require("redux");
const ReactDOM = require("react-dom");

require("./webconsole.css")
require("./reps.css")

const {
  client: { getClient, firefox },
  renderRoot, bootstrap, L10N
} = require("devtools-local-toolbox");

const { getValue, isFirefoxPanel } = require("devtools-config");

const NewConsoleOutputWrapper = require("./new-console-output-wrapper");
const { WebConsoleConnectionProxy } = require("./connection-proxy");
const ConsoleFrame = require("./console-frame");

// this.experimentalOutputNode, this.jsterm, toolbox, this.owner, this.document
const el = document.createElement("div")
const jsterm = {
  hud: {
    proxy: { client: {} },
    emit: () => {}
  }
};

if (!isFirefoxPanel()) {
  L10N.setBundle(require("./strings.js"));
  window.l10n = L10N;
}

function onConnect({client} = {}) {
  if (!client) {
    return;
  }

  const tabTarget = client.getTabTarget();
  const connectionProxy = new WebConsoleConnectionProxy(ConsoleFrame, tabTarget)
  connectionProxy.connect();
}

const toolbox = {}

app = new NewConsoleOutputWrapper(
  el, jsterm, toolbox, window, document
);
app.init();

window.eval = function(input) {
  client.evaluate(input, {}).then(r => {
    app.dispatchMessageAdd(r)
  })
}

bootstrap(React, ReactDOM, app.parentNode)
  .then(onConnect);
