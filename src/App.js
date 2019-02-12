// External Libraries
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Internal Libraries
import './App.css';
import Home from './pages/Home/Home';
import AppBar from './components/AppBar/AppBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar title="Time Table" />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
