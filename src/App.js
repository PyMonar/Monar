import React from 'react'
import { hot } from 'react-hot-loader/root'

function App() {
  return (
    <h1>Monar</h1>
  )
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
