import React, {FC} from 'react';

import Menu from 'src/components/navigation/menu/menu.component';

import {StyledBurger} from './hamburger.style';
import {HamburgerProps} from './hamburger.type';

const Hamburger: FC<HamburgerProps> = ({open, setOpen}: HamburgerProps) => {
  return (
    <>
      <StyledBurger
        aria-label="Toggle menu"
        aria-expanded={open}
        open={open}
        onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <Menu open={open} setOpen={setOpen} id={'menu'} />
    </>
  );
};

export default Hamburger;
