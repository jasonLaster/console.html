const ConsoleFrame = {
  owner: window,

  handleTabNavigated() {
  },

  onLocationChange(uri, title) {
    this.contentLocation = uri;
    if (this.owner.onLocationChange) {
      this.owner.onLocationChange(uri, title);
    }
  },
};


module.exports = ConsoleFrame;
