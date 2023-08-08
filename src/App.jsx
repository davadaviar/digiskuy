import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './sections/AboutUs';
import HaveProject from './sections/HaveProject';
import Hero from './sections/Hero';
import OurServices from './sections/OurServices';
import OurStack from './sections/OurStack';
import OurTeam from './sections/OurTeam';
import OurWorks from './sections/OurWorks';

function App() {

  return (

      <div className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <AboutUs />
        <OurStack />
        <OurServices />
        <OurWorks />
        <OurTeam />
        <HaveProject />
        <Footer />
      </div>
  )
}

export default App
