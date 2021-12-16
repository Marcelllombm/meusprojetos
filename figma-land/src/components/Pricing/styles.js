import styled from 'styled-components';

export const Container = styled.section`
background-color: var(--darkBackground);
margin: 12rem 0;
width:100%;
`;

export const Content = styled.article`
  align-items:center;
  color:white;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  padding:7rem 0;
  margin: 0 auto;
  width:80%;

  .left-content{
    width: 341px;
    h1{
      font-size: 3.44rem;
      font-weight: 900;
    }
    p{
      font-size:1.125rem;
      font-weight: 400;
      letter-spacing: 0.2px;
      line-height:27px;
      margin-top: 2rem;
    }
  }

  .right-content{
    display: flex;
    flex-direction:column;
    width: 260px;
    
    h3{
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    h4{
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      span{
        font-size:3.44rem;
        font-weight: 900;
      }
    
    }

    p{
      font-size: 1rem;
      letter-spacing: 0.2px;
      line-height:20px;
      margin-bottom: 1.5rem;
    }

    button{
      background-color: var(--blue);
      border:0;
      border-radius:25px;
      color:white;
      font-size: 1.35rem;
      font-weight: 700;
      padding: 1rem 2.5rem;
      margin-top: 2rem;
      &:hover{
        background-color: white;
        color:var(--blue);
      }
    }
  }

  @media screen and (min-width:320px) and (max-width: 850px){
    flex-direction: column;
    text-align: center;
    .right-content{
      margin-top: 2rem;
    }
  }
`;