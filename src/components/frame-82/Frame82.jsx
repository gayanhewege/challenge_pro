import CommonFrame82 from './CommonFrame82'
import './frame_82.css'
import image_01 from '../../assets/images/image_01.png'
import image_02 from '../../assets/images/image_02.png'
import image_03 from '../../assets/images/image_03.png'
import image_06 from '../../assets/images/image_06.png'
import image_08 from '../../assets/images/image_08.png'

const props = [
  {
    image: image_01,
    hedline: 'Relieve Shoulder Pain',
    text: 'We deal with various conditions ranging from rotator cuff injuries, labral injuries, bursitis, tendinitis, and impingement syndrome.\n\n Patients may be experiencing a variety of symptoms such as shoulder pain, weakness, tenderness, decreased range of motion, pain with overhead activities, and nocturnal symptoms. \n\n Different treatment options would consist of physical therapy, anti-inflammatory medications, shoulder injections, or surgery such as shoulder arthroscopy.',
    order: 0
  },
  {
    image: image_08,
    hedline: 'Relieve Wrist Pain',
    text: 'We focus on tendon and ligament tears in the wrist such as a tear of the triangular fibrocartilage complex. \n\n Symptoms can vary from wrist pain, weakness, tenderness, decreased range of motion, and pain with lifting and movements.\n\n Different treatment options would consist of physical therapy, anti-inflammatory medications, braces, or surgery such as wrist arthroscopy.',
    order: 1
  },
  {
    image: image_02,
    hedline: 'Relieve Knee Pain',
    text: 'We deal with several different knee conditions such as meniscal injuries, ligament injuries, bursitis, tendinitis, and joint effusions. \n\n Patients may be experiencing a variety of symptoms such as knee pain, tenderness, decreased range of motion, and pain with weight-bearing activities. \n\n Different treatment options would consist of physical therapy, anti-inflammatory medications, knee steroid injection, or surgery such as knee arthroscopy.',
    order: 2
  },
  {
    image: image_06,
    hedline: 'Relieve Ankle Pain',
    text: 'We focus on tendon and ligament tears in the ankle such as a tear of the anterior talofibular ligament or deltoid ligament. \n\n Symptoms can vary from ankle pain, weakness, tenderness, decreased range of motion, and pain with weight-bearing activities. \n\n Different treatment options would consist of physical therapy, anti-inflammatory medications, braces, or surgery such as ankle arthroscopy.',
    order: 3
  },
  {
    image: image_03,
    hedline: 'Pain Management',
    text: 'We treat various conditions involving the neck and back such as disc disease, herniated disc, bulging disc, cervical disc hernia, and nerve/spinal cord compression. Patients may experience different symptoms such as neck pain, back pain, muscle tension, or other spinal conditions. \n\n Different treatment options include cervical epidurals, lumbar epidurals, lumbar discectomy, cervical discectomy, trigger point injections, and medial branch injections.',
    order: 4
  }
]




function Frame82() {
  return (
    <div className="frame-82">
      {props.map((prop)=>{
        return <CommonFrame82 image={prop.image} headline={prop.hedline} text={prop.text} order={prop.order} key={prop.order}/>
      })}
        
    </div>
  )
}

export default Frame82