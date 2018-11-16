/*import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'
import LoginFormContainer from './components/LoginFormContainer'


import CreateEventFormContainer from './components/CreateEventFormContainer';
import EventDetailsContainer from './components/EventDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />

          <Route path="/" exact component={CreateEventFormContainer} />
          <Route path="/events/:id" exact component={EventDetailsContainer} />
          <Route path="/login" exact component={LoginFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;*/


import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import Routes from './components/Routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;