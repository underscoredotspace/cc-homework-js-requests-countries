const debug = true

const PubSub = {
  publish: function (channel, payload) {
    if (debug) {console.log({pubSub:'pub', channel, payload})}
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    if (debug) {console.log({pubSub:'sub', channel})}
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
