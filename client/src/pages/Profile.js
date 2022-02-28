import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import ScoreCards from '../components/Cards/ScoreCards';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Viewing {`${userData.username}'s`} profile.</h2>
      <ScoreCards scores={userData.testScores} />
    </div>
  );
};

export default Profile;
