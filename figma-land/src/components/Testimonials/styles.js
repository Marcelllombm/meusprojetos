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