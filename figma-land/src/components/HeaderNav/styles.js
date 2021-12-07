import styled from 'styled-components';

export const Container = styled.nav`
  align-items: center;
  display:flex;
  height: 156px;
  justify-content: space-between;
  margin: 0 auto;
  width:80%;
  z-index: 4;

  
  .toogle{
    display: none;
  }
  
    
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

  @media (max-width:1221px){
    width:95%;

    }
  @media screen and (min-width:320px) and (max-width:990px){
    .toogle{
      display: block;
      position: absolute;
      top: 1rem;
      right: 2rem;
      cursor: pointer;
      z-index: 16;
      color:white;
    }
    .menu-nav{
      display:none;
    }
    
    
  }
`;

export const ResponsiveNav = styled.div`
ul{
  right: 0;
  top:${({state})=>(state ? '0px' : '-100%')};

  width: 100%;
  padding:4rem 0;
  display: flex;
  flex-direction:column;
  background: black;
  position: absolute;
  z-index:14;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.2s ease-in-out;
  li{
    text-align: center;
    width: 100%;
    margin: 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    a{
      &:hover {
          border-bottom: 0.25rem solid var(--blue);
          color: var(--blue);
          font-weight: 400;
        }
    }
   }
}
`;