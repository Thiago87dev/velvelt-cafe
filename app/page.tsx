import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PetFriendly from './components/PetFriendly';
import About from './components/About';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Differentials from './components/Differentials';
import Instagram from './components/Instagram';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id='conteudo' tabIndex={-1} className='scroll-mt-22 [&>#inicio]:scroll-mt-22'>
        <Hero />
        <PetFriendly />
        <About />
        <Highlights />
        <Menu />
        <Differentials />
        <Instagram />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
