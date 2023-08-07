import CardService from './components/CardService';
import Navbar from './components/Navbar';
import AboutUs from './sections/AboutUs';
import Hero from './sections/Hero';
import OurServices from './sections/OurServices';
import OurStack from './sections/OurStack';
import OurTeam from './sections/OurTeam';
import OurWorks from './sections/OurWorks';

function App() {

  return (

      <div className='relative'>
        <Navbar />
        <Hero />
        <AboutUs />
        <OurStack />
        <OurServices />
        <OurWorks />
        <OurTeam />
      </div>
  )
}

export default App
