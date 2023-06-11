import React, { createContext, FC, PropsWithChildren, useState } from 'react';

import { PortfolioRoutes } from 'src/config/routes.config';

export interface ActiveSectionContextProps {
  activeSection: PortfolioRoutes;
  setActiveSection: (activeSection: PortfolioRoutes) => void;
}

export const ActiveSectionContext = createContext<ActiveSectionContextProps>({
  activeSection: PortfolioRoutes.HOME,
  setActiveSection: () => {},
});

const ActiveSectionProvider: FC<PropsWithChildren<any>> = ({
  children,
}: PropsWithChildren<any>) => {
  const [activeSectionValue, setActiveSectionValue] = useState<PortfolioRoutes>(
    PortfolioRoutes.HOME
  );

  const changeActiveSection = (activeSection: PortfolioRoutes) => {
    setActiveSectionValue(activeSection);
  };

  const activeSectionContext: ActiveSectionContextProps = {
    activeSection: activeSectionValue,
    setActiveSection: changeActiveSection,
  };

  return (
    <ActiveSectionContext.Provider value={activeSectionContext}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;
