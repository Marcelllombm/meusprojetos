import {GlobalStyle} from './styles/global';
import {Header} from './components/Header';
import {Features} from './components/Features';
import {Prototyping} from './components/Prototyping ';

export function App() {
  return (
    <>
      <Header/>
      <Features/>
      <Prototyping />
      <GlobalStyle/>
    </>
  )
}

