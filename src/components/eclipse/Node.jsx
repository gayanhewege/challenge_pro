
import Eclipse from './Eclipse'
import './node.css'

function Node({style, eclipseStyles}) {
  return (

    <div style={style}>
        <Eclipse eclipseStyles={eclipseStyles}/>
    </div>
    
  )
}

export default Node