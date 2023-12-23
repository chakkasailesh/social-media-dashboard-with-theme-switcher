import React from 'react'
import './App.scss'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <div className="upper"></div>
      <div className="lower"></div>
      <div className="main">
        <Header />
      </div>
    </>
  )
}

export default App
