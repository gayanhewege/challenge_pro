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


  const node_07_Styles = {
    position: 'absolute',
    width: 'calc(1863/1440*100vw)',
    height: 'calc(1863/1440*100vw)',
    left: 'calc(-539/1440*100vw)',
    top: 'calc(220/1440*100vw)', 
    zIndex: '-10',
    opacity: '0.3'
       
}

function Eclipse07() {
  return (
    <Node style={node_07_Styles} eclipseStyles={eclipseStyles}/>
  )
}

export default Eclipse07