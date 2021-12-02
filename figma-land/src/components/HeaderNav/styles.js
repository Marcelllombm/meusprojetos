import styled from 'styled-components';

export const Container = styled.nav`
  width:80%;
  height: 156px;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
    
  ul{
    list-style-type: none;
    display: flex;
    li{
      padding: 0 1.2rem;
      a{
        text-decoration: none;
        color:white;
        transition: 0.3s ease-in-out;
        padding: 0.2rem;
        font-size: 0.9375rem;
        &:hover {
          color: #023e8a;
          font-weight: 400;
          border-bottom: 0.25rem solid #023e8a;
        }
      }
    }
  }

  .phone{
    border-radius: 25px;
    font-weight: 700;
    padding: 15px;
    background-color:white;
    color:var(--blue);
  }

`;