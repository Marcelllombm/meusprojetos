import styled from 'styled-components';

export const Container = styled.nav`
  align-items: center;
  display:flex;
  height: 156px;
  justify-content: space-between;
  margin: 0 auto;
  width:80%;
  z-index: 4;
    
  ul{
    display: flex;
    list-style-type: none;
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
          border-bottom: 0.25rem solid #023e8a;
          color: #023e8a;
          font-weight: 400;
        }
      }
    }
  }

  .phone{
    background-color:white;
    border-radius: 25px;
    color:var(--blue);
    font-weight: 700;
    padding: 15px;
  }

`;