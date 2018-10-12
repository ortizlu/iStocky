import React, { Component } from 'react'
import './App.css'
import { Redirect, Switch, Route, Link } from 'react-router-dom'
import Dashboard from '../Stocks/Dashboard'
import Stock from '../Stocks/Stock'
import About from '../About/About'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stocks: this.props.stocks
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="about" to="/">
            <p>iStocky</p>
          </Link>

          <Link className="about" to="/about">
            About
          </Link>
        </header>

        <main>
          <Switch>
            <Route
              path="/stocks/:stock"
              render={props => <Stock {...this.state} {...props} />}
            />

            <Route
              path="/stocks"
              render={props => <Dashboard {...this.state} {...props} />}
            />
            <Route path="/about" component={About} />
            <Redirect to="/stocks" />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
