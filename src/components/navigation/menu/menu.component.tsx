import React, { FC, useContext } from 'react';
import classNames from 'classnames';

import { PortfolioRoutes } from 'src/config/routes.config';
import { ActiveSectionContext } from 'src/context/activeSection.context';

import { MenuProps } from './menu.type';
import { StyledMenu } from './menu.style';

const Menu: FC<MenuProps> = ({ open, setOpen, ...props }: MenuProps) => {
  const { activeSection } = useContext(ActiveSectionContext);

  const closeMenu = (route: PortfolioRoutes) => {
    setOpen(false, route);
  };

  return (
    <StyledMenu open={open} {...props}>
      {Object.values(PortfolioRoutes).map(route => (
        <span
          onClick={() => closeMenu(route)}
          className={classNames('menu__link', {
            active: activeSection === route,
          })}
          key={route}
        >
          {route}
        </span>
      ))}
    </StyledMenu>
  );
};

export default Menu;
