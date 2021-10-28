import styled from 'styled-components/macro';
import { Clocks } from 'components/Clocks';

const StyledApp = styled.div`
  min-height: 100vh;
  padding: 4vw;
  background: #111;
  font-family: 'Ericsson GA628';
  font-stretch: extra-expanded;
`;
const StyledAutolock = styled.a`
  display: table;
  margin: 4vw auto 0;
  font-size: 2vw;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
`;

function App() {
  return (
    <StyledApp>
      <Clocks />
      <StyledAutolock href="prefs:root=DISPLAY&path=AUTOLOCK">
        iPad Auto-Lock 🔒
      </StyledAutolock>
    </StyledApp>
  );
}

export default App;
