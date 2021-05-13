import React, {FC} from 'react';

import {StyledBurger} from './hamburger.style';
import {HamburgerProps} from './hamburger.type';

const Hamburger: FC<HamburgerProps> = ({open, setOpen}: HamburgerProps) => {
  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={open}
      open={open}
      onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Hamburger;
