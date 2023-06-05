import Carrusel from './components/carrusel/Carrusel';
import Description from './components/description/Description';
import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navbar/Navbar';
import Works from './components/works/Works';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection>
        <Description />
      </HeroSection>
      <Carrusel />
      <Works />
    </>
  );
}

export default App;
