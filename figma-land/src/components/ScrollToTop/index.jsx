import {useState} from 'react';
import {ToTop} from './styles';
import { GoArrowUp as Top } from "react-icons/go";

export function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  window.addEventListener("scroll",() =>{
    window.scrollY > 200 ? setScrollState(true) : setScrollState(false);
  })
  const handlerToTop =()=>{
    window.scrollTo({top: 0});
  }
  return (
    <ToTop scrollState={scrollState} onClick={handlerToTop}>
      <Top className='seta' size={20}/>  
      <span className="bg-scroll"></span>  
    </ToTop>
  )
}
