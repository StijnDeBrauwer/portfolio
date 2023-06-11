import React, { useMemo } from 'react';

import { StyledFooter } from './footer.style';
import { format } from 'date-fns';

const Footer = () => {
  const currentYear: string = useMemo(() => {
    return format(new Date(), 'yyyy');
  }, []);

  return (
    <StyledFooter>
      &copy; Stijn De Brauwer
      <div className="year"> {currentYear} </div>
    </StyledFooter>
  );
};

export default Footer;
