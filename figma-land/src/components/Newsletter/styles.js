import styled from 'styled-components';

export const Container = styled.section`
  margin: 12rem 0;
  width:100%;
`;

export const Content = styled.article`
  align-items:center;
  display: flex;
  justify-content:center;
  margin: 0 auto;
  width:80%;
  .imgNewsletter{
    width: 50%;
    img{
      width: 100%;
    }
  }
  .newsletter{
    text-align: center;
    margin-left: 5%;
    width: 40%;

    h1{
  color: var(--text);
    font-size: 2.78rem;
    font-weight:400;
    line-height: 57px;
    margin: 1.5rem auto;
    text-align: center;
    max-width:300px ;

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
    font-size: 1.12rem;
    line-height: 20px;
    padding-top: 1.5rem;
    margin: 0 auto;
    max-width:285px;
    span{
      font-weight:700;
      font-size: 1.35rem;
    }
    }
  }
  form{
    margin-top: 20px;
    input{
      background-color: #eeeeee;
      border:0;
      border-radius: 25px;
      color: var(--text);
      padding: 1rem;
      &:focus {
            outline: none;
          }
    }
    button{
      background: var(--blue);
      border: 0;
      border-radius: 25px;
      color:white;
      padding: 1rem 2rem;
      margin-left: 10px;
      &:hover{
        filter: brightness(0.9);
      }
    }
    .validateErrors{
    align-items: left;
    color: #b40000;
    border-radius: 25px;
    padding: 0.5rem; 
    margin-top: 10px;
    font-size:1rem;
    
  }
  .validate-sucess{
    background: #7ede7e;
    border-radius: 25px;
    color: #093a19;
    padding: 0.5rem;
    width:60%;
    margin: 0 auto;
    
  }
  }
  
  @media screen and (min-width: 320px) and (max-width:1070px ){
      .newsletter{
        text-align: center;
      form{
        input, button{
          width: 100%;
          margin: 0.5rem 0;
          max-width:300px;

        }
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width:960px ){
    flex-direction: column;
    .imgNewsletter{
      width: 80%;
    }
    .newsletter{
      width: 80%;
      margin: 0;
    }
  }
`;