import React, { Component } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        {this.props.stocks.map(stock => (
          <Link key={stock.id} to={'/stocks/' + stock.symbol}>
            <div className="Stock">
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
