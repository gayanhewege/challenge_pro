import './common_frame.css'

function CommonFrame({comment, name, style}) {

  return (
    <div className="common-frame" style={{order: style.order}}>
        <div className="container">
            <div className="eclipse" style={{backgroundImage: `url(${style.backgroundImage})`}}>

            </div>
            <div className="comment">
                {comment}
            </div>
        </div>
        <div className="name">
            {name}
        </div>
    </div>
  )
}

export default CommonFrame