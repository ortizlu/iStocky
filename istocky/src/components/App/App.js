import React, { Component } from 'react'
import './App.css'
import { Redirect, Switch, Route, Link } from 'react-router-dom'
import Dashboard from '../Stocks/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="about" to="#">
            <p>iStocky</p>
          </Link>

          <Link className="about" to="#">
            About
          </Link>
        </header>

        <main>
          <Switch>
            <Route path="/stocks" render={() => <Dashboard />} />
            <Redirect to="/stocks" />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
