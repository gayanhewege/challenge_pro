import CommonFrame from './CommonFrame'
import image from '../../../assets/images/image_05.png'
import './frame_90.css'

const props = [
  {
    name: 'Aaron Peter', 
    comment: 'I feel like I have my life back. No more pain and recovery was faster than expected.',
    style: {
      order: 0,
      backgroundImage: image
    }
  },
  {
    name: 'Mark Carter', 
    comment: 'I have grandsons and they are active. I now can keep up with them without pain.',
    style: {
      order: 1,
      backgroundImage: image
    }
  },
  {
    name: 'Brian Gonzales', 
    comment: 'My shoulder cause me to not be able to sleep well. Now I can sleep like a baby. Thank you.',
    style: {
      order: 2,
      backgroundImage: image
    }
  },

]



function Frame90() {
  return (
    <div className="frame-90">
      {props.map((prop)=>{
          return <CommonFrame style={prop.style} name={prop.name} comment={prop.comment} key={prop.name}/>
      })}
        
    </div>
  )
}

export default Frame90