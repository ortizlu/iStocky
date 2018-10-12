import React, { Component } from 'react'
import './Dashboard.css'
import { Redirect, Switch, Route, Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        {this.props.stocks.map(stock => (
          <Link to={'/stocks/' + stock.symbol}>
            <div className="Stock" key={stock.symbol}>
              <h1>{stock.name}</h1>
              <p>{stock.symbol}</p>
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

export default Dashboard
