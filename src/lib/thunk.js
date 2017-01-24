function thunk({ dispatch, getState }) {
  return next => action => {
    return (typeof action === "function")
      ? action(dispatch, getState)
      : next(action);
  };
}

module.exports = {thunk}
