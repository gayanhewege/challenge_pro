import Frame105 from './frame-105/Frame105'
import './frame_116.css'

function Frame116() {
  return (
    <div className="frame-116">
        <div className="group-40">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6390824158675!2d79.84785831459284!3d6.933668594990391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25922460c269b%3A0x6acb064d943db619!2sColombo%20Fort%20Station%2C%20Colombo!5e0!3m2!1sen!2slk!4v1664711944873!5m2!1sen!2slk" width="100%" height="100%" style={{border:0}} allowFullcreen="" loading="lazy" title='map' referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="frame-106">
            <Frame105/>
            <div className="button">
                <div className="text">
                    Book Appointment
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Frame116