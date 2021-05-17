import {PortfolioRoutes} from 'src/config/routes.config';

export interface HamburgerProps {
  open: boolean;
  setOpen: (isOpen: boolean, route?: PortfolioRoutes) => void;
}
