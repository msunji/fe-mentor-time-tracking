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
  background: var(--blue);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem 2rem; 
  border-radius: var(--curved-border);

  img {
    border: 3px solid var(--white);
    height: 70px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  p {
    color: var(--blue-pale);
  }

  @media screen and ${breakpoints.l} {
    flex-direction: column;
    flex: 2 1 0;
  }
`;

const ProfileFilter = styled.div`
  padding: 2rem 2rem;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;

  p {
    color: var(--blue-desat);

    &:hover {
      cursor: pointer;
      color: var(--white);
    }
  }
  @media screen and ${breakpoints.l} {
    flex-direction: column;
    flex: 1 1 0;
  }
`;

const Profile = () => {

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
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </ProfileFilter>
    </ProfileContainer>
  );
}

export default Profile;