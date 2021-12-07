import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 5rem 0;
  width: 80%;

  @media screen and (min-width: 320px) and (max-width:1200px){
  width: 95%;
}
  `;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  h1{
    color: var(--text);
     font-size: 2.78rem;
     font-weight:400;
     line-height: 57px;
     margin-top: 1.5rem;

  }
  h3{
    color: var(--text);
     font-size: 1.38rem;
     font-weight:700;
     line-height: 33px;
     margin-top: 1.5rem;

  }
  p{  
    color: var(--text);
    font-size: 1rem;
    font-weight:700;
    line-height: 20px;
    margin-top: 1.5rem;
    max-width:298px;
    text-align: center;
    }
  `;

export const Content = styled.article`
  display: flex;
  margin-top: 5rem;
  align-items: center;
  
  .imgSistem-2{
    width: 80%;
    img{
      width: 100%;
    }
  }

  .itens{
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  width: 250px;
  gap: 8rem;
  img{
    float: left;
    align-content: center;
  }
  h3{
    color: var(--text);
    font-size: 1.38rem;
    float: left;
    margin-bottom: 2rem;
    margin-left: 0.7rem;
    margin-top: 0.8rem;
  }
  p{
    width: 100%;
  }
  }
  @media screen and (min-width: 320px) and (max-width:1000px){
    flex-direction: column;
    
    .itens{

  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left:0;
  margin-top: 2rem;
  width: auto;
  gap:0;
      span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:auto;
        margin: 0 10%;
        text-align: center;
        img{
         max-width: 40px;
        }
      }
    }
}
@media screen and (min-width: 320px) and (max-width:650px){
  .itens{
    flex-direction:column;
  span{
  margin-top:2rem;
  
  }
  }
}
`;
