var { PrefsHelper } = require("devtools-sham-modules");
const { Services: { pref }} = require("devtools-modules");
const { isDevelopment } = require("devtools-config");

if (isDevelopment()) {
  pref("devtools.debugger.remote-timeout", 1000);
}

const prefs = new PrefsHelper("devtools", {
  debuggerRemoteTimeout: ["Int", "debugger.remote-timeout"],
});

module.exports = { prefs };
