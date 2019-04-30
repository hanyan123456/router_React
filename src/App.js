import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link,Redirect } from 'react-router-dom';
import './normalize.css';
import Home from './pages/home/Index';
import Login from './pages/login/Login';

class App extends Component {
  render() {
    return (
            <Router>
                <Switch>
                    <div className="App">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">login</Link>
                            </li>
                        </ul>
                        <hr />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                    </div>
                </Switch>

            </Router>

    );
  }
}

export default App;
