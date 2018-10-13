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
      stocks: []
    }
  }

  componentDidMount() {
    fetch('https://ga-stocks.herokuapp.com/stocks')
      .then(data => data.json())
      .then(jsonFile =>
        this.setState({
          stocks: jsonFile
        })
      )
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
              render={props => {
                let stock = this.state.stocks.find(stock => {
                  return stock.symbol === props.match.params.stock
                })
                return <Stock {...props} stock={stock} />
              }}
            />

            <Route
              path="/stocks"
              render={() => <Dashboard {...this.state} />}
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
