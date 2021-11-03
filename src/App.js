import GlobalStyle from './style/globalStyle';
import styled from 'styled-components';
import data from './data/data';
import Container from './components/Container';
import Profile from './components/Profile';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <Main>
        <Container>
          <Profile data={data} />
        </Container>
      </Main>
    </>
  );
}

export default App;
