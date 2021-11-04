import { useState } from 'react';
import GlobalStyle from './style/globalStyle';
import breakpoints from './style/breakpoints';
import styled from 'styled-components';
import data from './data/data';
import Container from './components/Container';
import Profile from './components/Profile';
import TimeBlock from './components/TimeBlock';

function App() {
  // console.log(data);
  return (
    <>
      <GlobalStyle />
        <Container>
          <Profile />
            { data.map(category => <TimeBlock key={category.title} data={category} />)}
        </Container>
    </>
  );
}

export default App;
