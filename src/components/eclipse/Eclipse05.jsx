import Node from "./Node"

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
          left: '15.74%',
          right: '15.74%',
          top: '15.74%',
          bottom: '15.74%',
          background: '#FFFFFF',
          color: 'white',
          borderRadius: '50%',
      }
  }


  const node_05_Styles = {
    position: 'absolute',
    width: 'calc(823/1440*100vw)',
    height: 'calc(823/1440*100vw)',
    left: 'calc(-296/1440*100vw)',
    top: 'calc(593/1440*100vw)',
    zIndex: '-10',
    opacity: '0.1'
    
}

function Eclipse05() {
  return (
    <Node style={node_05_Styles} eclipseStyles={eclipseStyles}/>
  )
}

export default Eclipse05