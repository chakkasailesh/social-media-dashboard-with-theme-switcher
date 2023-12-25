import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext'

const ToggleButton = () => {
  const { switchTheme } = useContext(ThemeContext)
  const handleClick = () => {
    switchTheme()
  }
  return (
    <label className="toggle-container">
      <span className="toggle-slider">
        <input type="checkbox" onClick={() => handleClick()} />
        <span className="slider"></span>
      </span>
    </label>
  )
}

export default ToggleButton
