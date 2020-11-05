import React, { Component } from 'react'
import './App.css';
import AppRouter from '../src/config/AppRouter'


class App extends Component {
 render() {
    return (
      <div classname='win'>
        <AppRouter />
      </div>
    )
  }
}


export default App;
