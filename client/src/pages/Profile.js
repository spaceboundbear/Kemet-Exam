import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import ScoreCards from '../components/Cards/ScoreCards';

const Profile = () => {
  const { loading, data, refetch } = useQuery(QUERY_ME);
  const userData = data?.me || [];

  useEffect(() => {
    refetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Card className="bg-dark my-5 border-0 px-5  py-2">
        <h2 className="m-5 fs-1 fw-bold text-light">
          {`${userData.username}'s`} Profile
        </h2>
        <ScoreCards scores={userData.testScores} />
      </Card>
    </Container>
  );
};

export default Profile;
