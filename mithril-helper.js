var helper = {
  withArg: function(obj, withArgCallback, callbackThis) {
    return function(e) {
      e = e || event;
      var _this = callbackThis || this;
      withArgCallback.apply(_this, [e, obj]);
    };
  }
};
module.exports = helper;
