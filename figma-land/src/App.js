import {GlobalStyle} from './styles/global';
import {ScrollToTop} from './components/ScrollToTop';
import {Header} from './components/Header';
import {Features} from './components/Features';
import {Prototyping} from './components/Prototyping ';
import { Newsletter } from './components/Newsletter';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <ScrollToTop/>
      <Header/>
      <Features/>
      <Prototyping />
      <Newsletter/>
      <Partners/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
      <GlobalStyle/>
    </>
  )
}

