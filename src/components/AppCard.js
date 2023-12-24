import React from 'react'
import { up, down } from '../assets'

const AppCard = ({ app }) => {
  return (
    <div className={`appcard ${app.name}`}>
      <div className="apptop">
        <img src={app.icon} alt={app.name} />
        <p>{app.id}</p>
      </div>
      <div className="appmiddle">
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
