import React, {FC} from 'react';

import {PortfolioRoutes} from 'src/config/routes.config';

import {MenuProps} from './menu.type';
import {StyledMenu} from './menu.style';

const Menu: FC<MenuProps> = ({open, setOpen, ...props}: MenuProps) => {
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <StyledMenu open={open} {...props}>
      {Object.values(PortfolioRoutes).map((route) => (
        <span onClick={closeMenu} key={route} className="menu__link">
          {route}
        </span>
      ))}
    </StyledMenu>
  );
};

export default Menu;
