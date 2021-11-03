import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';

const Block = styled.div`
  margin-bottom: 2rem;

`;

const InnerBlock = styled.div`
  padding: 2rem 2rem;
  background: var(--blue-dark);
  border-radius: var(--curved-border);

  .row {
    display: flex;
    justify-content: space-between;
  }
`;

const TimeBlock = ({data}) => {
  console.log(data);
  return (
    <Block>
      <InnerBlock>
        <div className="row row--top">
          <h2>{data.title}</h2>
          <BsThreeDots />
        </div>
        <div className="row row--bottom">
          
          <p>{data.timeframes.weekly.current}hrs</p>
          <small>Last Week - {data.timeframes.weekly.previous}hrs</small>
        </div>
      </InnerBlock>
    </Block>
  )
};

export default TimeBlock;