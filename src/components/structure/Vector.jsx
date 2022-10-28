
const nodeRadiusX = 35/701*100/2;
const nodeRadiusY = 35/559*100/2;
const strokeWidth = `${8/1440*100 + 'vw'}`
const locations = [
  
  {line_no: 'line_01', cordinates: {x1: 97, x2: 64, y1: 84.3, y2: 72}},
  {line_no: 'line_02', cordinates: {x1: 64, x2: 35.8, y1: 72, y2: 42}},
  {line_no: 'line_03', cordinates: {x1: 35.8, x2: 21.5, y1: 42, y2: 8}},
  {line_no: 'line_04', cordinates: {x1: 35.8, x2: 3.35, y1: 42, y2: 47.7}},
  {line_no: 'line_05', cordinates: {x1: 3.35, x2:-2.5 , y1: 47.7, y2: 55.5}},
  {line_no: 'line_06', cordinates: {x1: -2.5, x2: 3, y1: 55.5, y2: 93}}
  

]


function Vector() {

  return (
    <svg width={'100%'} height={'100%'} overflow='visible' >
      {locations.map((location)=>{
        return <line 
        key={location.line_no}
        x1={`${location.cordinates.x1 + nodeRadiusX + '%'}`} 
        x2={`${location.cordinates.x2 + nodeRadiusX + '%'}`}  
        y1={`${location.cordinates.y1 + nodeRadiusY + '%'}`} 
        y2={`${location.cordinates.y2 + nodeRadiusY + '%'}`} 
        stroke= '#00FFCE' 
        strokeWidth={strokeWidth} />
      })}
        
    </svg>
  )
}

export default Vector