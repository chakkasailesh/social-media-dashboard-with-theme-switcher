import React, { useContext } from 'react'
import { up, down } from '../assets'
import { ThemeContext } from '../themeContext'

const AppCard = ({ app }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`appcard ${app.name} ${theme}`}>
      <div className={`apptop ${theme}`}>
        <img src={app.icon} alt={app.name} />
        <p>{app.id}</p>
      </div>
      <div className={`appmiddle ${theme}`}>
        <h2>{app.count}</h2>
        <p>{app.text}</p>
      </div>
      <div className="appbottom">
        <img src={app.net == 'green' ? up : down} alt="" />
        <p className={`${app.net == 'green' ? 'limegreen' : 'brightred'}`}>
          {app.change}
        </p>
      </div>
    </div>
  )
}

export default AppCard
