import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';

const Block = styled.div`
  margin-bottom: 2rem;

`;

const InnerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
  background: var(--blue-dark);
  border-radius: var(--curved-border);
`;

const TimeBlock = ({data}) => {
  console.log(data);
  return (
    <Block>
      <InnerBlock>
        <div>
          <h2>{data.title}</h2>
          <p>{data.timeframes.weekly.current}hrs</p>
        </div>
        <div>
          <BsThreeDots />
          <small>Last Week - {data.timeframes.weekly.previous}hrs</small>
        </div>
      </InnerBlock>
    </Block>
  )
};

export default TimeBlock;