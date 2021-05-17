import {PortfolioRoutes} from 'src/config/routes.config';

export interface MenuProps {
  open: boolean;
  id: string;
  setOpen: (open: boolean, route: PortfolioRoutes) => void;
}
