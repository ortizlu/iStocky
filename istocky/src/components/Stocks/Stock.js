import React, { Component } from 'react'
import './Dashboard.css'
// import propTypes from 'prop-types'
import axios from 'axios'

class Stock extends Component {
  constructor() {
    super()
    this.state = {
      stock: {}
    }
  }
  componentDidMount() {
    axios
      .get(
        `https://api.iextrading.com/1.0/stock/${
          this.props.match.params.stock
        }/batch?types=quote,news,chart&range=1m&last=10`
      )
      .then(response => this.setState({ stock: response }))
  }

  render() {
    // let indStock = this.props.stocks.filter(
    //   stock => stock.symbol === this.props.match.params.stock
    // )[0]
    return (
      <div className="ind-stock">
        <h1>{this.state.stock.companyName || 'Name'}</h1>
        <p>{this.props.stock.symbol || 'SYMBL'}</p>
        <p>Last Price: {this.state.stock.latestPrice || '123.45'}</p>
        <p>Change: {this.state.stock.change || '123.45'}</p>
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
