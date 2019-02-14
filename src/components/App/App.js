import React from 'react'
import { Routes } from 'components'
import { Provider as RewormProvider } from 'reworm'

const App = () => (
  <RewormProvider>
    <main>
      <Routes />
    </main>
  </RewormProvider>
)

export default App
