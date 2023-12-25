import React, { useContext, useState } from 'react'
import './App.scss'
import Header from './components/Header'
import AppCard from './components/AppCard'
import { apps, stats } from './constants'
import EngagementCard from './components/EngagementCard'
import { ThemeContext } from './themeContext'

const App = () => {
  const val = useContext(ThemeContext)
  const switchTheme = () => {
    setTheme((prev) => ({
      ...prev,
      theme: prev.theme == 'light' ? 'dark' : 'light',
    }))
  }
  const [theme, setTheme] = useState({ theme: val, switchTheme })
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`upper ${theme.theme}`}></div>
      <div
        className={`lower ${theme.theme}`}
        style={{ height: `calc(${document.body.scrollHeight}px - 200px)` }}
      ></div>
      <div className={`main ${theme.theme}`}>
        <Header />
        <div className="apps">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
        <div className={`overview ${theme.theme}`}>
          <h2>Overview - Today</h2>
        </div>
        <div className="engagements">
          {stats.map((stat) => (
            <EngagementCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
