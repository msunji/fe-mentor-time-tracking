import styled from 'styled-components';

const ProfileInfo = styled.div`
  background: var(--blue);
`;


const Profile = (data) => {

  return (
    <div>
      <ProfileInfo>
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </ProfileInfo>

    </div>
  );
}

export default Profile;