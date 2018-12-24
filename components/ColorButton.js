// @flow
import React from 'react';
import { cx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

type Props = {
  children: React$Node,
  className?: string,
};

const ColorButton = ({
  children,
  className = '',
  theme,
  ...rest
}: Props & App$ThemeProps = {}) => (
  <button
    type="button"
    className={cx(
      css`
        background-color: ${theme.colors.orange};
      `,
      'f4 fw4 white-90 pointer pv1 bn br2 w-100 pv2',
      className,
    )}
    {...rest}>
    {children}
  </button>
);

const Wrapped: React$ComponentType<Props> = withTheme(ColorButton);
export default Wrapped;
