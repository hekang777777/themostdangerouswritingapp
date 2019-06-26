import React, { Component } from 'react';
import Welcome from './Welcome';
import Help from './Help';
import WritingApp from './App';

import { HashRouter as Router, Route } from "react-router-dom";

const App = (props) => {
    let params = new URLSearchParams(props.location.search);
    let appProps = {
      limit: parseInt(params.get('limit'), 10) || 5,
      type: params.get('type') || "minutes",
      hardcore: params.get('hardcore') || false
    }
    // Setting a random key forces the component to re-mount even if
    // the route didn't change. That's useful for when we click the
    // Write button from withing <WritingApp />
    return <WritingApp key={Math.random()} {...appProps} />
}

export default class MDWA extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/write" component={App} />
        <Route path="/help" component={Help} />
      </Router>
    )
  }
}
