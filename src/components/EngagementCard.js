import React, { useContext } from 'react'
import { up, down } from '../assets'
import { ThemeContext } from '../themeContext'
const EngagementCard = ({ stat }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`engagementcard ${theme}`}>
      <div className="title">
        <p>Page Views</p>
        <img src={stat.icon} alt="icon" />
      </div>
      <div className="bottom">
        <h3>{stat.count}</h3>
        <div className="change">
          <img src={stat.change > 0 ? up : down} alt="" />
          <p className={`${stat.change > 0 ? 'limegreen' : 'brightred'}`}>{`${
            stat.change > 0 ? stat.change : -1 * stat.change
          }%`}</p>
        </div>
      </div>
    </div>
  )
}

export default EngagementCard
