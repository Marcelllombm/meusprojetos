import styled from 'styled-components';

export const Container = styled.section`
padding: 1rem 0 4rem 0 ;
width:100%;
`;

export const Content = styled.article`
align-items:center;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
width:80%;
header{
  color: var(--text);
  text-align: center;
  h1{
    font-size: 2.88rem;
    font-weight: 400;
  }
  p{
    font-size: 1rem;
    font-weight: 700;
    padding-top: 1rem;
    width: 298px;
  }
  .midia-sociais{
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
    padding-top: 3rem;
    width: 170px;
    .inc{
      color: var(--blue);
      transition: 0.2s ease-in-out;
      cursor: pointer;
      &:hover{
        color: var(--text);
      }
    }
  }
}

main{
  .map{
    margin: 4rem 0;
    max-width: 870px;
    max-height: 370px;
    img{
      width: 100%;
      height: 100%;
    }
  }

  .info{
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
  
    .info-map, .info-phone, .info-email {
      color: var(--text);
      font-size:0.75rem; 
      margin-top:2rem;
      text-align: center;
      width: 100%;
      max-width: 210px;
      img{
        height: 30px;
        width: 30px;
        margin-bottom: 1rem;
      }
    }
  }
}

.formContact{
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 20px;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  text-align: center;
  margin: 4rem 0;
  padding: 4rem ;
  width: 100%;
  max-width: 848px;
  h1{
  color:var(--text);
  font-size: 1.35rem;
  padding: 2rem 0;
}
  form{
    display: flex;
    flex-direction:column;
    gap: 2rem;
    
    input{
    background: var(--inputBackground);
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 39px;
    color: var(--text);
    padding: 20px 20px ;
    &:focus {
      outline: none;
    }
  }
  textarea{
    background: var(--inputBackground);
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 10px;
    color: var(--text);
    padding: 20px 20px ;
    height: 195px;
    &:focus {
      outline: none;
    }
  }
  button{
    text-align: center;
    background:var(--blue);
    border-radius: 3rem;
    border:0;
    color: white;
    font-size: 0.8;
    font-weight:700;
    padding: 20px 0;
    letter-spacing: 3px;
    width:145px;
    &:hover{
        filter: brightness(0.9);
      }
  }
  .validateErrors{
    align-items: left;
    color: #b40000;
    padding-left: 20px;
    max-width: max-content;
    margin-top: -20px;
    width: 100%;
    
  }
  .validate-sucess{
    background: #7ede7e;
    border-radius: 25px;
    color: #093a19;
    padding: 1rem;
    
  }
  }
}

@media screen and (min-width:320px) and (max-width:560px){
  main{
    .info{
      flex-direction: column;
    align-items:center;
    }
  }
}
`;
