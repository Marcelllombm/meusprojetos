import styled from'styled-components';

export const ToTop = styled.div`
  display: ${({scrollState})=>(scrollState ? "block" : 'none')};
  position:fixed;
  bottom: 1rem;
  right: 2rem;
  z-index:10;
  cursor: pointer;
  padding: 1rem;
  transition: 0.3s ease-in-out;
  
  .seta{
    position: fixed;
    color:white;
    z-index:12;
    bottom: 7rem;
    right: 2rem;
  }
 .bg-scroll{
  position: fixed;
  bottom: 6rem;
  right: 1rem;
  z-index: 8;
  width:50px;
  height: 50px;
  border-radius: 5px;
  background: linear-gradient(39.97deg,  #BF40E1 0.79%,  #E538B9 79.29%); 
 } 
  `;