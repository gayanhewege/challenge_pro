import Node from '../eclipse/Node'
import Vector from './Vector'
import Label from './Label'

const structureStyle = {
    position: 'absolute',
    width: 'calc(701/1440*100vw)',
    height: 'calc(559/1440*100vw)',
    left: 'calc(601/1440*100vw)',
    top: 'calc(219/1440*100vw)',
}

const eclipseStyles = {
  eclipse_03:{
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    borderRadius: '50%',
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #00FFCE'
  },
  eclipse_04:{
        position: 'absolute',
        left: '17.74%',
        right: '17.74%',
        top: '17.74%',
        bottom: '17.74%',
        background: '#FFFFFF',
        color: 'white',
        borderRadius: '50%',
    }
}


const commonNodeStyles = {
  position: 'absolute',
  height: 'calc(35/1440*100vw)',
  width: 'calc(35/1440*100vw)',
}

const nodeStyles = [
  {name: 'ankle_r', style:{
    ...commonNodeStyles,
    left: '97%',
    top: '84.3%',
  },
  label:'ANKLE',
  labelStyle: {
    left: '101%',
    top: '78%'
  }
},
  {name: 'knee_r', style:{
    ...commonNodeStyles,
    left: '64%',
    top: '72%',
  },
  label: 'KNEE',
  labelStyle: {
    left: '69%',
    top: '67%'
  }
},
  {name: 'hip', style:{
    ...commonNodeStyles,
    left: '35.8%',
    top: '42%'
  },
  
},
  {name: 'shoulder', style:{
    ...commonNodeStyles,
    left: '21.5%',
    top: '8%'
  },
  label: 'SHOULDER',
  labelStyle: {
    left: '28%',
    top: '8%'
  }
},
  {name: 'wrist', style:{
    ...commonNodeStyles,
    left: '3.35%',
    top: '47.7%',
  },
  label: 'WRIST',
  labelStyle: {
    left: '0%',
    top: '40%'
  }
},
  {name: 'knee_l', style:{
    ...commonNodeStyles,
    left: '-2.5%',
    top: '55.5%'  
  },
  label: 'KNEE',
  labelStyle: {
    left: '5%',
    top: '57%'
  }
},
  {
    name: 'ankle_l', 
    style:{
    ...commonNodeStyles,
    left: '3%',
    top: '93%',
  },
  label: 'ANKLE',
  labelStyle: {
    left: '9.5%',
    top: '93.3%'
  }
}
]


function Structure() {
  return (
    <div style={structureStyle}>
      {nodeStyles.map((style)=>{
        return <Node style={style.style} key={style.name} eclipseStyles={eclipseStyles}/>
      })}
        <Vector/>
      {nodeStyles.map((style)=>{
        if(style.name !== 'hip'){
          return <Label style={style.labelStyle} key={style.name} label={style.label}/>
        } else{
          return null
        }
        
      })}
        
    </div>
  )
}

export default Structure