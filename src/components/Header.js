import React from 'react'
import ToggleButton from './ToggleButton'

const Header = () => {
  return (
    <div className="header">
      <div className="heading">
        <h2>Social Media Dashboard</h2>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="mode">
        <p>Dark Mode</p>
        <ToggleButton />
      </div>
    </div>
  )
}

export default Header
