import styled from 'styled-components';

export const Container = styled.section`
  margin: 12rem 0;
  width:100%;
`;

export const Content = styled.article`
  align-items:center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  margin: 0 auto;
  width:80%;
  
h1{
    color: var(--text);
    width: 100;
    font-size: 2.78rem;
    font-weight:400;
    line-height: 57px;
    margin-top: 1rem;
    margin-bottom: 6rem;
}
.testimonials{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  .testimonial{
    border: 1px solid #DEDEDE;
    border-radius: 6px;
    padding: 2.5rem;
    width: 335px;
    text-align: center;
    
    img{
      max-width: 150px;
      margin-bottom:2rem;
      width: 100%;
    }
    
    p{
      color: var(--text);
      font-size: 1.125rem;
      letter-spacing: 0.2px;
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }
    
    h3{
      color: var(--text);
      font-size: 1.125rem;
      font-weight: 400;
      margin:2rem 0;
    }

    span{
      color: var(--text);
      font-size: 1rem;
      font-weight: 700;
    }

    &:hover{
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      transform: translateX(0.2rem) translateY(-0.7rem);
    }
  }
 }
 button{
      background-color: var(--blue);
      border:0;
      border-radius:25px;
      color:white;
      font-size: 1.35rem;
      font-weight: 700;
      padding: 1rem 2.5rem;
      margin-top: 4rem;
    &:hover{
      border: 0;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      color:white;
      transform: translateX(0.2rem) translateY(-0.7rem);
      filter: brightness(0.9)
    }
  }
  @media screen and (min-width: 320px) and (max-width:1050px){
  .testimonials{
    grid-template-columns: repeat(2, 1fr);
    .testimonial{
      width: 100%;
      &:nth-last-child(-n + 2){
        display: none;
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width:750px){
  .testimonials{
    grid-template-columns: repeat(1, 1fr);
    .testimonial{
      margin: 0 auto;
      width: 85%;
      &:nth-last-child(-n + 3){
        display: none;
      }
      
    }
  }
}

`;

export const StarContainer = styled.section`
  input[type="radio"]{
    display: none;
    }
  .star{
    cursor: pointer;
    transition: color 200ms;
  }

`;