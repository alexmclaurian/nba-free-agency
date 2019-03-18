import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Teams from '../components/Teams';
import Players from '../components/Players';
import Upload from '../components/Upload';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Routing = () => (
  <Router>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/teams'>Teams</Link>
      <Link to='/players'>Players</Link>
      <Link to='/upload'>Upload</Link>

      <Route exact path='/' component={Home} />
      <Route path='/teams' component={Teams} />
      <Route path='/players' component={Players} />
      <Route path='/upload' component={Upload} />
    </div>
  </Router>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }

  render() {
    const val = this.props.data;

    return Routing();
  }
}

export default App;
