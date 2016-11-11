const React = require("react");
const { bindActionCreators, combineReducers } = require("redux");
const ReactDOM = require("react-dom");

require("./styles.css")

const {
  client: { getClient, firefox },
  renderRoot, bootstrap
} = require("devtools-local-toolbox");

const { getValue, isFirefoxPanel } = require("devtools-config");

const NewConsoleOutputWrapper = require("./new-console-output-wrapper");
const { WebConsoleConnectionProxy } = require("./connection-proxy");

// this.experimentalOutputNode, this.jsterm, toolbox, this.owner, this.document
const el = document.createElement("div")
const jsterm = {
  hud: {
    proxy: { client: {} },
    emit: () => {}
  }
};
const toolbox = {}

window.app =  new NewConsoleOutputWrapper(el, jsterm, toolbox, window, document);
app.init();


window.eval = function(input) {
  client.evaluate(input).then(r => {
    app.dispatchMessageAdd(r)
  })
}

function onConnect({tabTarget, threadClient}) {
  debugger
  const connectionProxy = new WebConsoleConnectionProxy({}, tabTarget)
}

bootstrap(React, ReactDOM, app.parentNode)
  .then(onConnect);
