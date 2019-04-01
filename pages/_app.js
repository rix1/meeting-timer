import React from 'react';
import App, { Container } from 'next/app';

import Navigation from '../components/Navigation';
import Link from '../components/Link';
import Emoji from '../components/Emoji';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className="flex flex-column vh-100">
          <div>
            <Component {...pageProps} />
          </div>

          <footer className="tc f6 moon-gray mb3 mt7">
            Created by{' '}
            <Link className="underline silver" href="https://twitter.com/rix1">
              rix1
            </Link>
          </footer>
        </div>
      </Container>
    );
  }
}
