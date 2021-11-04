import { useState, useEffect } from 'react';
import GlobalStyle from './style/globalStyle';
import Container from './components/Container';
import Profile from './components/Profile';
import TimeBlock from './components/TimeBlock';


function App() {
  const [time, setTime] = useState('weekly');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [time]);

  const handleSetTime = (e) => {
    setTime(e.target.id);
  }

  return (
    <>
      <GlobalStyle />
        <Container>
          <Profile handleTime={handleSetTime} time={time} />
            { data.map(category => <TimeBlock key={category.title} category={category.title} data={category.timeframes[time]} />)}
        </Container>
    </>
  );
}

export default App;
