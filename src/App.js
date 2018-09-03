import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Listing from './components/Listing';
import Error from './components/Error';
import Navigation from './components/Navigation';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
          <Switch>
            <Route path ='/' component={Home} exact />
            <Route path ='/register' component={Register} />
            <Route path ='/listing' component={Listing} />
            <Route component={Error} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
