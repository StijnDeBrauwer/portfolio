import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  height: var(--header-height);

  background-color: white;

  color: var(--color-text);
  font-size: var(--font-size-xxxlarge);
  font-family: var(--font-family-regular);

  -webkit-box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.53);
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;
