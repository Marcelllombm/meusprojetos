import {GlobalStyle} from './styles/global';
import {Header} from './components/Header';
import {Features} from './components/Features';
import {Prototyping} from './components/Prototyping ';
import { Newsletter } from './components/Newsletter';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';

export function App() {
  return (
    <>
      <Header/>
      <Features/>
      <Prototyping />
      <Newsletter/>
      <Partners/>
      <Testimonials/>
      <Pricing/>
      <GlobalStyle/>
    </>
  )
}

