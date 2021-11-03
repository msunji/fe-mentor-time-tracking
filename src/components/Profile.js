import styled from 'styled-components';
import profileImg from '../assets/img/image-jeremy.png';

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
`;

const ProfileFilter = styled.div`
`;

const Profile = (data) => {

  return (
    <div>
      <ProfileInfo>
        <img src={profileImg} alt="Jeremy Robson" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </ProfileInfo>

    </div>
  );
}

export default Profile;