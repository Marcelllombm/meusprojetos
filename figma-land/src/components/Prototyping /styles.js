import styled from "styled-components";

export const Container = styled.section`
background: linear-gradient(39.97deg, #00F3B9 0.79%, #2187FF 79.29%);
padding: 4rem 0 ;
width:100%;
`;


export const Content = styled.article`
width:80%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
h1{
  color: white;
  font-size: 2.78rem;
  font-weight:400;
  line-height: 57px;
  text-align: center;
  margin-top: 1.5rem;


  }
  h3{
    color: white;
     font-size: 1.38rem;
     font-weight:700;
     line-height: 33px;
     margin-top: 1.5rem;

  }
  p{  
    color: white;
    font-size: 1rem;
    font-weight:700;
    line-height: 20px;
    margin-top: 1.5rem;
    max-width:298px;
    text-align: center;
    }
    .bt-protopyping{
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      padding: 1rem;
      margin-top: 5rem;
      max-width:320px ;
      width: 100%;

      button{
        border: 1px solid white;
        background: none;
        border-radius: 25px;
        color:white;
        font-weight: 700;
        font-size: 1rem;
        padding: 1rem 2rem;
        transition: 0.3s ease-in-out;
        
        &:first-of-type{
          background: white;
          border: 0;
          color: var(--blue);
          transition: 0.3s ease-in-out;
          &:hover{
            background: none;
            border: 1px solid white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            color:white;
            transform: translateX(0.2rem) translateY(-0.7rem);
          }
        }
        &:hover{
          background: white;
          border: 1px solid white;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          color: var(--blue);
          transform: translateX(0.2rem) translateY(-0.7rem);
          }
       }
      }  

`;
