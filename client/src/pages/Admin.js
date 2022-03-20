import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCards from '../components/Cards/StudentCards';

import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Admin = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  console.log(data);
  console.log(users);

  return (
    <>
      <Card className="bg-dark my-5 border-0 px-5 py-2">
        <h1 className="m-5 fs-1 fw-bold text-light text-center">ADMIN</h1>
        <div className="grid-container">
          {loading ? <div>Loading...</div> : <StudentCards users={users} />}
        </div>
      </Card>
    </>
  );
};

export default Admin;
