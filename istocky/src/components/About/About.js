import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This is an app built using react, react-router, and axios. This app
          pulls from the IEX Trading API
        </p>
        <a href="http://www.ortizlu.com">
          <p>Created By: Luis Ortiz</p>
        </a>
      </div>
    )
  }
}

export default About
