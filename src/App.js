import React, { Component } from 'react'
import Header from './components/Header'
import MemeComponent from './components/MemeComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeComponent />
      </div>
    )
  }
}
