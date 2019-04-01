// @flow
import React, { type Node } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { color, space, width } from 'styled-system';

type Props = {
  children: Node,
  title: string,
  description?: string,
};

const Section = styled.section`
  ${color}
  ${space}
  ${width}
`;

const Page = ({ children, title, description, ...rest }: Props) => (
  <Section className="flex-auto relative overflow-hidden" {...rest}>
    <Head>
      <title>{title}</title>
      <meta key="og:title" property="og:title" content={title} />
      <meta key="description" property="description" content={description} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
    </Head>
    {children}
  </Section>
);

Page.defaultProps = {
  description: '',
};

export default Page;
