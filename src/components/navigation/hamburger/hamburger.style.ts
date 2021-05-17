import styled from 'styled-components';

import {Colors, Metrics} from 'src/assets';

export const StyledBurger = styled.button<{open: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  position: fixed;
  left: 1rem;
  top: 1rem;
  padding: 0;
  z-index: 10;

  @media ${Metrics.mediaQueries.tablet} {
    left: ${Metrics.desktopMargin};
    top: ${Metrics.desktopMargin};
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${Colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({open}) => (open ? '0' : '1')};
      transform: ${({open}) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
