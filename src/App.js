import React from 'react'
import { hot } from 'react-hot-loader/root'

import Card from './components/Card'

function App() {
  return (
    <div id="monar">
      <header id="header">
        Monar
      </header>
      <main id="main">
        <Card />
        <Card />
        <Card />
      </main>
      <footer id="footer">
        Monar@2019
      </footer>
    </div>
  )
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
