import styled from 'styled-components';

import {Colors} from 'src/assets';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  text-decoration: none;
  padding: 0.5rem;

  background-color: transparent;

  color: ${Colors.white};

  border: 1px solid ${Colors.white};

  cursor: pointer;

  border-radius: 10px;
`;
