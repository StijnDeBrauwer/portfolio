import styled from 'styled-components';

import { Colors, Fonts } from 'src/assets';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.text};

  height: 5vh;
  padding: 1rem;

  color: ${Colors.white};
  text-align: center;
  font-size: ${Fonts.sizes.large};
  line-height: 1.5;
  .year {
    color: ${Colors.accent};
  }
`;
