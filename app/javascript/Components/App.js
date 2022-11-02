import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../redux/store";
import Greeting from "./Greeting";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;