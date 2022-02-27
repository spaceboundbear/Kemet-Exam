import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || [];

  console.log(userData);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
        Viewing {`${userData.username}'s`} profile.
      </h2>
    </div>
  );
};

export default Profile;
