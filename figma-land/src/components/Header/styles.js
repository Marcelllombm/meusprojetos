import styled from 'styled-components';
import bgsvg from '../../assets/bg-curve.svg'

export const Container = styled.section`
  background: linear-gradient(39.97deg, #00F3B9 0.79%, #2187FF 79.29%);
  max-height: 1473px;
  position: relative;
  width: 100%;
  &:after{
    content:"";
    background-image:url(${bgsvg});
    background-repeat: no-repeat;
    background-size: 100%;
    bottom: 0;
    position: absolute;
    height: 20vw;
    width:100%;
    z-index: 2;
  }
`;