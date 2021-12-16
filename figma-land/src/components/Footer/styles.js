import styled from 'styled-components';

export const Container = styled.section`
background: var(--darkBackground);
padding: 4rem 0 ;
width:100%;
`;

export const Content = styled.article`
  align-items:center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  margin: 0 auto;
  width:80%;

  .midia-sociais{
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
    padding-top: 3rem;
    width: 170px;
    .inc{
      color: white;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      &:hover{
        color: var(--blue);
      }
    }
  }

  ul{
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin-top:2rem;
    li{
      padding: 0 1.2rem;
      a{
        color:white;
        font-size: 0.9375rem;
        padding: 0.2rem;
        text-decoration: none;
        transition: 0.09s ease-in-out;
        border:0;
        &:hover {
          border-bottom: 0.25rem solid var(--blue);
          color: var(--blue);
          font-weight: 400;
        }
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width:550px){
  ul{
    flex-direction: column;
    li{
      padding-top: 1rem;
    }
  }
}
`;