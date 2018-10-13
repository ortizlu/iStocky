import React, { Component } from 'react'
import './Dashboard.css'
// import propTypes from 'prop-types'

class Stock extends Component {
  constructor() {
    super()
    this.state = {
      stock: {}
    }
  }
  componentDidMount() {
    fetch(
      `https://api.iextrading.com/1.0/stock/${
        this.props.match.params.stock
      }/batch?types=quote,news,chart&range=1m&last=10`
    )
      .then(response => response.json())
      .then(data => this.setState({ stock: data.quote }))
  }

  render() {
    // let indStock = this.props.stocks.filter(
    //   stock => stock.symbol === this.props.match.params.stock
    // )[0]
    console.log(this.props.stock)
    return (
      <div className="ind-stock">
        <h1>{this.state.stock.companyName || 'Name'}</h1>
        <p>{this.props.stock.symbol || 'SYMBL'}</p>
        <p>Last Price: {this.state.stock.latestPrice || '123.45'}</p>
        <p>Change: {this.state.stock.change || 'Change'}</p>
        <p>High: {this.state.stock.high || '12.45'}</p>
        <p>Low: {this.state.stock.low || '123.45'}</p>
        <p>Open: {this.state.stock.open || '123.45'}</p>
      </div>
    )
  }
}

Stock.defaultProps = {
  stock: 'Stock'
}

export default Stock
