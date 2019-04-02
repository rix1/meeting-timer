// @flow
import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Content from '../components/Content';
import Page from '../components/Page';
import Timer from '../components/Timer';
import ColorButton from '../components/ColorButton';
import InlineInput from '../components/InlineInput';
import Emoji from '../components/Emoji';

import { timeToString } from '../lib/formatTime';
import theme from './theme';

const Index = () => {
  const [ppl, setPeople] = useState(1);
  const [plannedTime, setTime] = useState(1);
  const [hourRate, setHourRate] = useState(327);

  return (
    <ThemeProvider theme={theme}>
      <Page title="Rix1s NextJS starter ">
        <Content className="mw6 center lh-copy">
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
          minutes, with an avg hourly rate of
          <InlineInput
            className="w5"
            value={hourRate}
            type="number"
            onChange={ev => setHourRate(ev.target.value)}
          />{' '}
          money
          <br />
          <Timer>
            {(runningTime, isRunning, toggle) => (
              <div>
                <div className="flex justify-between">
                  <p className="f3">
                    Total time spent{' '}
                    {timeToString((runningTime + plannedTime * 60) * ppl)}
                  </p>
                  <ColorButton
                    className={isRunning ? 'i' : ''}
                    fontSize={5}
                    bg="transparent"
                    color="blue"
                    width={60}
                    onClick={toggle}>
                    {isRunning ? '⏸' : '⏯'}
                  </ColorButton>
                </div>
                <div className="flex justify-between">
                  <p className="f6 dib">
                    Hours spent {timeToString(runningTime + plannedTime * 60)}
                  </p>
                  <p className="f6 dib">
                    Money spent:{' '}
                    {new Intl.NumberFormat('no-NB', {
                      style: 'currency',
                      currency: 'NOK',
                    }).format(
                      (
                        (ppl * (hourRate * (runningTime + plannedTime * 60))) /
                        60 /
                        60
                      ).toFixed(0),
                    )}
                  </p>
                </div>
              </div>
            )}
          </Timer>
        </Content>
      </Page>
    </ThemeProvider>
  );
};

export default Index;
