import Header from '../components/Header';
import MainVisual from '../components/MainVisual';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Overview from '../components/Overview';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <MainVisual />
      <Features />
      <Gallery />
      <Overview />
      <Contact />
      <Footer />
    </div>
  );
}