import styled from 'styled-components';

import {Colors, Fonts, Metrics} from 'src/assets';

export const StyledMenu = styled.nav<{open: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background ${Colors.primary};
  transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  width: 25vw;
  box-shadow: ${({open}) => (open ? '5px 0 5px -2px rgba(0,0,0,.5)' : 'unset')};
  text-align: left;
  padding: 2rem 2rem 2rem ${Metrics.desktopMargin};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
   
  }
  
  .menu__link {
    font-size: ${Fonts.sizes.large};
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${Colors.white};
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media ${Metrics.mediaQueries.mobileS} {
      font-size: ${Fonts.sizes.regular};
      text-align: center;
    }

    @media ${Metrics.mediaQueries.tablet} {
      font-size: ${Fonts.sizes.xlarge};
      text-align: center;
      padding: 2rem 0;
    }
    &:hover {
      color:${Colors.accent};
    }

    &.active{
      color:${Colors.accent};
    }
    
  }
`;
