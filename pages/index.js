// @flow
import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Content from '../components/Content';
import Page from '../components/Page';
import Timer from '../components/Timer';
import ColorButton from '../components/ColorButton';
import InlineInput from '../components/InlineInput';

import { timeToString } from '../lib/formatTime';
import theme from './theme';

const Index = () => {
  const [ppl, setPeople] = useState(0);
  const [plannedTime, setTime] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Page title="Rix1s NextJS starter ">
        <Content className="mw6 center">
          <h1 className="lh-copy">How many are attending?</h1>
          We are{' '}
          <InlineInput
            value={ppl}
            type="number"
            onChange={ev => setPeople(ev.target.value)}
          />{' '}
          people meeting for{' '}
          <InlineInput
            className="w5"
            value={plannedTime}
            type="number"
            onChange={ev => setTime(ev.target.value)}
          />{' '}
          minutes
          <br />
          <Timer>
            {(runningTime, isRunning, toggle) => (
              <div>
                <ColorButton className="mt4" onClick={toggle}>
                  {isRunning ? 'Pause' : 'Start'}
                </ColorButton>
                <p className="f2">
                  Total time spent{' '}
                  {timeToString((runningTime + plannedTime * 60) * ppl)}
                </p>
                <p className="f6">
                  Actual spent {timeToString(runningTime + plannedTime * 60)}
                </p>
              </div>
            )}
          </Timer>
        </Content>
      </Page>
    </ThemeProvider>
  );
};

export default Index;
