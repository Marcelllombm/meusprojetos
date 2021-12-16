import { useEffect } from 'react';
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
import scrollreveal from 'scrollreveal';

export function App() {
  const homeHeader = ['.logo','.menu-nav','.phone','#home', ".btImgNotebook",".imgNotebook"];
  const features = ['#features','.imgSistem-2','.itens'];
  const otherComponents = ["#prototyping","#newsletter", 
  "#partners","#testimonials","#pricing","#contact", "#footer"];
  useEffect(()=>{
    const sr = scrollreveal({
      origin: "top",
      distance:"80px",
      duration:2000,
      reset:true,
    });

    sr.reveal(
      `
      ${homeHeader},
      ${features},
      ${otherComponents}
      `,
      {
        opacity: 0,
        interval: 300,
      }
    )
   
  },[]);

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

