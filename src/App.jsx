import CardService from './components/CardService';
import Navbar from './components/Navbar';
import AboutUs from './sections/AboutUs';
import Hero from './sections/Hero';
import OurServices from './sections/OurServices';
import OurStack from './sections/OurStack';

function App() {

  return (

      <div className='relative'>
        <Navbar />
        <Hero />
        <AboutUs />
        <OurStack />
        <OurServices />
      </div>
  )
}

export default App
