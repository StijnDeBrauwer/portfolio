import styled from 'styled-components';

import { Metrics, Colors } from 'src/assets';

export const StyledBurger = styled.button<{ open: boolean; color: string }>`
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
    background: ${({ color, open }) => (open ? Colors.white : color)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
