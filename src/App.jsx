import React from'react'
import Home from './components/Home'
import Music from './components/Music'
import Projects from'./components/Projects'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


export default function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/music'>
              <Music/>
            </Route>
            <Route path='/code'>
              <Projects/>
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }