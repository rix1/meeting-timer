// @flow
import React from 'react';
import styled from '@emotion/styled';
import { fontSize, color, space, width } from 'styled-system';

type Props = {
  children: React$Node,
  className?: string,
};

const Btn = styled.button`
  ${color}
  ${space}
  ${fontSize}
  ${width}
`;

const ColorButton = ({ children, className = '', ...rest }: Props = {}) => (
  <Btn
    type="button"
    width="100%"
    bg="orange"
    className={`f4 fw4 white-90 pointer bn br2 ${className}`}
    {...rest}>
    {children}
  </Btn>
);

export default ColorButton;
