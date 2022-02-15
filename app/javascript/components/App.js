import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from 'react-router';
import HelloWorld from "./HelloWorld";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HelloWorld greeting='Friend' />} />
        </Routes>
      </Router>
    );
  }
}

export default App
