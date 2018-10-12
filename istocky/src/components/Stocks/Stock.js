import React, { Component } from 'react'

class Stock extends Component {
  constructor(props) {
    super(props)
  }

  // ONE STOCK
  // "name": "Apple Inc.",
  // "symbol": "AAPL",
  // "lastPrice": 140.64,
  // "change": -0.280000000000001,
  // "high": 141.74,
  // "low": 140.35,
  // "open": 141.5

  render() {
    let indStock = this.props.stocks.filter(
      stock => stock.symbol === this.props.match.params.stock
    )[0]

    return (
      <div>
        <h1>{indStock.name}</h1>
        <p>{indStock.symbol}</p>
        <p>Last Price: {indStock.lastPrice}</p>
        <p>Change: {indStock.change}</p>
        <p>High: {indStock.high}</p>
        <p>Low: {indStock.low}</p>
        <p>Open: {indStock.open}</p>
      </div>
    )
  }
}

export default Stock
