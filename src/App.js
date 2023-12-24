import React from 'react'
import './App.scss'
import Header from './components/Header'
import AppCard from './components/AppCard'
import { apps, stats } from './constants'
import EngagementCard from './components/EngagementCard'

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
        <div className="overview">
          <h2>Overview - Today</h2>
        </div>
        <div className="engagements">
          {stats.map((stat) => (
            <EngagementCard stat={stat} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
