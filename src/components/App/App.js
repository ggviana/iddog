import React from 'react'
import logo from 'assets/images/logo.svg'
import './App.css'
import { Routes, State } from 'components'

const initialState = {
  user: null
}

const App = () => (
  <State data={initialState}>
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to React</h1>
      </header>
      <p className='App-intro'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Routes />
    </div>
  </State>
)

export default App
