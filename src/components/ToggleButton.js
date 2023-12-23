import React from 'react'

const ToggleButton = () => {
  const handleClick = () => {
    console.log('clicked')
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
