import styled from 'styled-components/macro';
import { Clocks } from 'components/Clocks';

const StyledApp = styled.div`
  min-height: 100vh;
  padding: 1vw;
  background: #111;
`;

function App() {
  return (
    <StyledApp>
      <Clocks />
    </StyledApp>
  );
}

export default App;
