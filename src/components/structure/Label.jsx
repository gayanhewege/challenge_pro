
const commonLabelStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'calc(10/1440*100vw)',
  position: 'absolute',
  width: 'calc(89/1440*100vw)',
  height: 'calc(32/1440*100vw)',
  background: 'rgba(255, 255, 255, 0.9)',
  boxShadow: 'calc(0/1440*100vw) calc( 4/1440*100vw) calc( 4/1440*100vw) rgba(0, 0, 0, 0.25)',
  borderRadius: 'calc(5/1440*100vw)',
}

const commonTextStyles = {
  width: 'calc(65/1440*100vw)',
  height: 'calc(11/1440*100vw)',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: 'calc(12/1440*100vw)',
  lineHeight: 'calc(12/1440*100vw)',
  textAlign: 'center',
  letterSpacing: 'calc(0.4/1440*100vw)',
  color: '#08785D',
  flex: 'none',
  order: '0',
  flexGrow: '0',
}


function Label({style, label}) {
  return (
    <div style={{...commonLabelStyles, ...style}}>
        <div style={commonTextStyles}>
          {label}
        </div>
    </div>
  )
}

export default Label;

