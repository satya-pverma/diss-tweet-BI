import React from 'react';

import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Tweets from './components/tweets/Tweets';
import { Provider } from 'react-redux';
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditTweet from './components/tweets/EditTweet';
import AddTweet from './components/tweets/AddTweet';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Tweets} />
                <Route exact path="/tweet/add" component={AddTweet} />
                <Route exact path="/tweets/edit/:id" component={EditTweet} />

              </Switch>
            </div>

          </div>
        </div>
      </Router>

    </Provider>
  );
}

export default App;
