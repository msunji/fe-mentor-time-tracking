import styled from 'styled-components';
import breakpoints from '../style/breakpoints';
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

const OuterBlock = styled.div`
`;

const Block = styled.div`
  position: relative;
  height: 100%;
  margin-top: 40px;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 55px;
    top: -40px;
    left: 0;
    border-radius: var(--curved-border) var(--curved-border) 0 0;
    ${({ category }) => setCategoryStyle(category)};
    background-position: 93% -10px;
    background-repeat: no-repeat;
    z-index: -1;
  }

`;

const BlockData = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 1.8rem 1.8rem;
  background: var(--blue-dark);
  border-radius: var(--curved-border);
  transition: background 0.4s ease-in;

  &:hover {
    background: var(--blue-desat-hover);
  }

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
        font-weight: 300;
      }
      small {
        color: var(--blue-pale);
        font-weight: 400;
        font-size: 0.83em;
      }
    }
  }

  @media screen and ${breakpoints.l} {
    .row--bottom {
      flex-direction: column;
      align-items: flex-start;

      p {
        margin-bottom: 1.2rem;
      }
    }
  }

  @media screen and ${breakpoints.xl} {
    .row--bottom {
      p {
        font-size: 2.8em;
      }
    }
  }
`;

const TimeBlock = ({ data: {current, previous}, category, timeframe}) => {

  const setPreviousTime = (timeframe) => {
    if (timeframe === 'daily') {
      return 'Yesterday';
    }
    if (timeframe === 'weekly') {
      return 'Last Week';
    }
    if (timeframe === 'monthly') {
      return 'Last Month';
    }
  }

  return (
    <OuterBlock>
      <Block category={category}>
        <BlockData>
          <div className="row row--top">
            <h2>{category}</h2>
            <BsThreeDots />
          </div>
          <div className="row row--bottom">
            <p>{current}hrs</p>
            <small>{setPreviousTime(timeframe)}- {previous}hrs</small>
          </div>
        </BlockData>
      </Block>
    </OuterBlock>

  )
};

export default TimeBlock;