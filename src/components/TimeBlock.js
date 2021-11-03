import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import Work from '../assets/img/icon-work.svg';
import Play from '../assets/img/icon-play.svg';
import Study from '../assets/img/icon-study.svg';
import Exercise from '../assets/img/icon-exercise.svg';
import Social from '../assets/img/icon-social.svg';
import SelfCare from '../assets/img/icon-self-care.svg';

const setCategoryStyle = (category) => {
  const categories = {
    'Work': `background-color: var(--orange); background-image: url(${Work});`,
    'Play': `background-color: var(--blue-soft); background-image: url(${Play});`,
    'Study': `background-color: var(--pink); background-image: url(${Study});`,
    'Exercise': `background-color: var(--green); background-image: url(${Exercise});`,
    'Social': `background-color: var(--violet); background-image: url(${Social});`,
    'Self Care': `background-color: var(--yellow); background-image: url(${SelfCare});`,
    'default': `background-color: var(--blue);`,
  }
  return (categories[category] || categories['default']);
}

const Block = styled.div`
  margin-bottom: 2rem;

  .block-top {
    height: 55px;
    border-radius: var(--curved-border) var(--curved-border) 0 0;
    ${({ category }) => setCategoryStyle(category)};
    background-position: 93% -10px;
    background-repeat: no-repeat;
  }
`;

const InnerBlock = styled.div`
  transform: translateY(-12px);
  width: 100%;
  padding: 2rem 2rem;
  background: var(--blue-dark);
  border-radius: var(--curved-border);

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--top {
      margin-bottom: 10px;

      svg {
        font-size: 1.8rem;
        color: var(--blue-pale);
      }
    }

    &--bottom {
      p {
        font-size: 1.78em;
      }
      small {
        color: var(--blue-pale);
        font-weight: 400;
        font-size: 0.83em;
      }
    }
  }
`;

const TimeBlock = ({data}) => {
  // console.log(data.title);
  return (
    <Block category={data.title}>
      <div className="block-top" />
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