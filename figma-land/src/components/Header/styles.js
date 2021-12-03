import styled from 'styled-components';
import bgsvg from '../../assets/bg-curve.svg'

export const Container = styled.section`
  background: linear-gradient(39.97deg, #00F3B9 0.79%, #2187FF 79.29%);
  max-height: 1473px;
  width: 100%;
  position: relative;
  &:after{
    content:"";
    position: absolute;
    z-index: 2;
    bottom: 0;
    width:100%;
    height: 22rem;
    background-image:url(${bgsvg});
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;