import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import configureStore from "../configureStore";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => ('Home!')} />
            <Route path='/hello' render={() => <HelloWorld grerting='Friend' />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
