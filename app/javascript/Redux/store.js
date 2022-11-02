import { configureStore } from "@reduxjs/toolkit";
import greetReducer from "./Reducer";

const store = configureStore({
  reducer: {
    greeting: greetReducer,
  },
});

export default store;