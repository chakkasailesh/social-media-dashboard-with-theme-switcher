import React from 'react'
import './App.scss'
import Header from './components/Header'
import AppCard from './components/AppCard'
import { apps } from './constants'

const App = () => {
  return (
    <>
      <div className="upper"></div>
      <div className="lower"></div>
      <div className="main">
        <Header />
        <div className="apps">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
