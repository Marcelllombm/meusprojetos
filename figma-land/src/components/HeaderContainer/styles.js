import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 80%;

  .content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
    text-align: center;
    h1{
      font-size: 3.44rem;
      font-weight: 900;
      line-height: 65px;
    }
    h3{
      font-size: 1.38rem;
      font-weight: 700;
      line-height: 33px;
    }
    p{
      font-size: 1rem;
      font-weight: 700;
      line-height: 20px;
    }
  }

  button{
    background:white;
    border:none;
    border-radius: 25px;
    color:var(--blue);
    font-size: 1.38rem;
    font-weight: 900;
    margin-top: 4rem;
    width: 256px;
    height: 65ṕx;
    padding: 15px;
    transition: 0.3s ease-in-out;
    &:hover{
      filter: opacity(70%);
      transform: translateX(0.2rem) translateY(-0.7rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
  .imgNotebook{
    width: 100%;
    text-align: center;
    z-index:5;
    img{
      height: auto;
      width: 100%;
    }
  }

`;
