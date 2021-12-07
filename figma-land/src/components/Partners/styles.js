import styled from 'styled-components';

export const Container = styled.section`
  margin: 12rem 0;
  width:100%;
`;
export const Content = styled.article`
  align-items:center;
  display: flex;
  flex-direction:column;
  justify-content:center;
  margin: 0 auto;
  width:80%;
  h1{
    color: var(--text);
    font-size: 2.78rem;
    font-weight:400;
    line-height: 57px;
    margin-top: 1.5rem;
  }
  p{
    color: var(--text);
    font-size: 1rem;
    font-weight: 700;
    line-height: 20px;
    margin: 0 auto;
    padding-top: 1.5rem;
    text-align: center;
    width:298px;
  }
  .partners{
    text-align: center;
    margin:4rem 0;

    img{
      padding: 2rem;
      border:0;
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
  &:hover{
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color:white;
    transform: translateX(0.2rem) translateY(-0.7rem);
    filter: brightness(0.9)
  }
  }
`;