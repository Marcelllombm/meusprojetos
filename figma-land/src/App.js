import {GlobalStyle} from './styles/global';
import {Header} from './components/Header';
import {Features} from './components/Features';
import {Prototyping} from './components/Prototyping ';
import { Newsletter } from './components/Newsletter';
import { Partners } from './components/Partners';

export function App() {
  return (
    <>
      <Header/>
      <Features/>
      <Prototyping />
      <Newsletter/>
      <Partners/>
      <GlobalStyle/>
    </>
  )
}

