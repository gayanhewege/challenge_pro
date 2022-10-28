import ArrowLeft from './arrows/ArrowLeft'
import ArrowRight from './arrows/ArrowRight'
import Frame90 from './frame-90/Frame90'
import './group_90.css'

function Group90() {
  return (
    <div className="group-90">
        <div className="container">
            <ArrowLeft/>
            <Frame90/>
            <ArrowRight/>
        </div>
        <div className="lines">
            <div className="line-05"/>
            <div className="line-06"/>
            <div className="line-07"/>
        </div>
        
    </div>
  )
}

export default Group90