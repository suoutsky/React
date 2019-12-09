import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
// v16.0
import RenderNew from './view/V16.0/render-new';
import Portal from './view/V16.0/portal';
// v16.2
import Fragement from './view/V16.2/fragment';
// v16.3
import ContextApi from './view/V16.3/context-api';
import CreateRefApi from './view/V16.3/createRef-api';
import ForwardRefApi from './view/V16.3/forwardRef-api';
// v16.6
import Memo from './view/v16.6/memo';
import Lazysuspense from './view/v16.6/lazysuspense';
import DerivedStateFromError from './view/v16.6/derivedStateFromError';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <div className="app-content">
          <div className="meun">
            <div className="title">V16.0</div>
            <ul>
              <li>
                <Link to="/">render-new</Link>
              </li>
              <li>
                <Link to="/portal">portal</Link>
              </li>
            </ul>
            <div className="title">V16.2</div>
            <ul>
              <li>
                <Link to="/fragement">RenderFragment</Link>
              </li>
            </ul>
            <div className="title">V16.3</div>
            <ul>
              <li>
                <Link to="/context">context-api</Link>
              </li>
              <li>
                <Link to="/createref">createRef-api</Link>
              </li>
              <li>
                <Link to="/forwardrefApi">forwardRef-api</Link>
              </li>
              <li>
                <Link to="/memo">memo-api</Link>
              </li>
              <li>
                <Link to="/lazysuspense">lazysuspense-api</Link>
              </li>
              <li>
                <Link to="/derivedStateFromError">derivedStateFromError-api</Link>
              </li>
              
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={RenderNew} />
            <Route exact path="/portal" component={Portal} />
            <Route exact path="/fragement" component={Fragement} />
            <Route exact path="/context" component={ContextApi} />
            <Route exact path="/createref" component={CreateRefApi} />
            <Route exact path="/forwardrefApi" component={ForwardRefApi} />
            <Route exact path="/memo" component={Memo} />
            <Route exact path="/lazysuspense" component={Lazysuspense} />
            <Route exact path="/derivedStateFromError" component={DerivedStateFromError} />
          </div>
        </div>
      </Router>
    </div>    
  );
}

export default App;
