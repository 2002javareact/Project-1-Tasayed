import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MessageComponent } from './components/MessageComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' render={(props) => <MessageComponent history={props.history} match={props.match} location={props.location} message={'An example of the render design pattern for components'} />} />
        
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      
      </header>
    </div>
  );
}

export default App;
