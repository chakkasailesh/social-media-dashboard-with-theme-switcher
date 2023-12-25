import React, { useContext } from 'react'
import ToggleButton from './ToggleButton'
import { ThemeContext } from '../themeContext'

const Header = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`header ${theme}`}>
      <div className={`heading ${theme}`}>
        <h2>Social Media Dashboard</h2>
        <p>Total Followers: 23,004</p>
      </div>
      <div className={`mode ${theme}`}>
        <p>Dark Mode</p>
        <ToggleButton />
      </div>
    </div>
  )
}

export default Header
