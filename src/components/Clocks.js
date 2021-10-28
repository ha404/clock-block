import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

const StyledClocks = styled.div`
  font-family: 'Ericsson GA628';
  font-stretch: extra-expanded;
`;
const StyledClock = styled.div`
  margin: 0 0 4vw;
`;
const StyledTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1vw;
  padding: 2vw 1vw 1vw;
  font-size: 10vw;
  text-align: center;
  color: red;
  background: #211;
`;
const StyledLocation = styled.div`
  padding: 2vw 1vw 1vw;
  font-size: 6vw;
  text-align: center;
  text-transform: uppercase;
  color: yellow;
  background: #202910;
`;

export function Clocks() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrentDateTime(new Date()), 1000);
  }, []);

  return (
    <StyledClocks>
      <StyledClock>
        <StyledTime>
          {new Intl.DateTimeFormat('en-US', {
            timeStyle: 'medium',
          }).format(currentDateTime)}
        </StyledTime>
        <StyledLocation>Local</StyledLocation>
      </StyledClock>
      <StyledClock>
        <StyledTime>
          {new Intl.DateTimeFormat('en-US', {
            timeStyle: 'short',
            timeZone: 'America/New_York',
          }).format(currentDateTime)}
        </StyledTime>
        <StyledLocation>New York</StyledLocation>
      </StyledClock>
    </StyledClocks>
  );
}
