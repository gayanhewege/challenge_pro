import './common_frame_82.css'

function CommonFrame82({text, headline, order, image}) {
  return (
    <div className="common-frame-82" style={{order: order}}>
      <div className="frame-75">
        <div className="frame-76">
          <div className="headline">
            {headline}
          </div>
          <div className="line-05">

          </div>
        </div>
        <div className="text-82">
          {text}
        </div>
      </div>
      <div className="image" style={{backgroundImage: `url(${image})` }}>

      </div>
    </div>
  )
}

export default CommonFrame82