import React, { ComponentType, forwardRef } from 'react';
import classNames from 'classnames';

import { WithSectionProps } from './withSection.type';
import './withSection.style.scss';

const withSection = <P extends WithSectionProps>(Component: ComponentType<P>) =>
  // eslint-disable-next-line react/display-name
  forwardRef<HTMLDivElement, P>(
    ({ className, ...props }: WithSectionProps, ref) => {
      return (
        <div ref={ref} className={classNames('with-section', className)}>
          <Component style={{ flex: 1, width: '100%' }} {...(props as P)} />
        </div>
      );
    }
  );

export { withSection };
