const { createWrapper } = require("next-redux-wrapper");

const configureStore = () => {};

const wraper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default configureStore;
