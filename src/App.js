import React from 'react'
import { hot } from 'react-hot-loader/root'

function App() {
  return (
    <div id="monar">
      <header id="header">
        Monar
      </header>
    </div>
  )
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
