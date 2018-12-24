// @flow
import React from 'react';
import { cx, css } from 'react-emotion';
import { withTheme } from 'emotion-theming';

type Props = { className?: string, error?: boolean };

const InlineInput = ({
  className = '',
  theme,
  error = false,
  ...rest
}: Props & App$ThemeProps = {}) => (
  <input
    className={cx(
      'ph2',
      className,
      css`
        border: none;
        border-bottom: ${theme.sizes.lineWidth} dotted ${error ? 'red' : 'gray'};
        outline: none;
        width: 3em;
        text-align: right;
        &:focus {
          border-bottom: ${theme.sizes.lineWidth} solid ${theme.colors.orange};
        }
      `,
    )}
    {...rest}
  />
);

const Wrapped: React$ComponentType<Props> = withTheme(InlineInput);
export default Wrapped;
