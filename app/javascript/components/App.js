import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from 'react-router';
import HelloWorld from "./HelloWorld";
import configureStore from '../redux/configureStore';
import { Provider } from "react-redux";

const store = configureStore;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HelloWorld />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App
