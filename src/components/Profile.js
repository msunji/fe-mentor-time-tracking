import styled from 'styled-components';
import breakpoints from '../style/breakpoints';
import profileImg from '../assets/img/image-jeremy.png';

const ProfileContainer = styled.div`
  background: var(--blue-dark);
  border-radius: var(--curved-border);
  grid-area: profile;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfileInfo = styled.div`
  width: 100%;
  background: var(--blue);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.8rem 1.8rem;
  border-radius: var(--curved-border);

  img {
    border: 3px solid var(--white);
    height: 70px;
    border-radius: 50%;
    margin-right: 1rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  
  p {
    color: var(--blue-pale);
  }

  @media screen and ${breakpoints.l} {
    flex-direction: column;
    flex: 2 1 0;
    align-items: flex-start;
    justify-content: flex-end;

    img {
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 0.6rem;
    }

    h1 {
      max-width: 140px;
      font-size: 2.2em;
      margin-bottom: 2rem;
    }
  }
`;

const ProfileFilter = styled.div`
  padding: 2rem 2rem;
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  p {
    color: var(--blue-desat);

    &.active {
      color: var(--white);
    }

    &:hover {
      cursor: pointer;
      color: var(--white);
    }
  }
  @media screen and ${breakpoints.l} {
    flex-direction: column;
    flex: 1 1 0;
    
    p {
      padding: 0.5rem 0;
    }
  }
`;

const Profile = ({ handleTime, time }) => {

  return (
    <ProfileContainer>
      <ProfileInfo>
        <img src={profileImg} alt="Jeremy Robson" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>

      </ProfileInfo>
      <ProfileFilter>
        <p id="daily" onClick={handleTime} className={`${time === 'daily' ? 'active' : ''}`}>Daily</p>
        <p id="weekly" onClick={handleTime} className={`${time === 'weekly' ? 'active' : ''}`}>Weekly</p>
        <p id="monthly" onClick={handleTime} className={`${time === 'monthly' ? 'active' : ''}`}>Monthly</p>
      </ProfileFilter>
    </ProfileContainer>
  );
}

export default Profile;