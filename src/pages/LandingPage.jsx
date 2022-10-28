import Eclipse05 from '../components/eclipse/Eclipse05'
import Frame116 from '../components/fame-116/Frame116'
import Frame82 from '../components/frame-82/Frame82'
import Frame83 from '../components/Frame83'
import Group115 from '../components/group-115/Group115'
import Group117 from '../components/group-117/Group117'
import Group90 from '../components/group-90/Group90'
import Group92 from '../components/group-92/Group92'
import HeroImage from '../components/hero-image/HeroImage'
import HeroTextBlock from '../components/hero-text-block/HeroTextBlock'
import Navigation from '../components/navigation-bar/Navigation'
import Structure from '../components/structure/Structure'
import './landing_page.css'

function LandingPage() {

  return (
    <div className="landing-page">
        <HeroImage/>
        <Navigation/>
        <HeroTextBlock/>
        <Structure/>
        <Eclipse05/>
        <Group92/>
        <Eclipse05/>
        <Frame83/>
        <Group90/>
        <Group117/>
        <Frame82/>
        <Frame116/>
        <Group115/>
    </div>
  )
}

export default LandingPage