import React, {FC, useEffect, useState} from 'react';

import Menu from 'src/components/navigation/menu/menu.component';
import {Colors, Metrics} from 'src/assets';

import {StyledBurger} from './hamburger.style';
import {HamburgerProps} from './hamburger.type';

const Hamburger: FC<HamburgerProps> = ({open, setOpen}: HamburgerProps) => {
  const [color, setColor] = useState<string>(Colors.white);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setColor(
      window.pageYOffset > Metrics.screenHeight ? Colors.text : Colors.white
    );
  };

  return (
    <>
      <StyledBurger
        aria-label="Toggle menu"
        aria-expanded={open}
        open={open}
        color={color}
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
