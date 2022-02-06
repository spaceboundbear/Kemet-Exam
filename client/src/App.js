import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router';
import { Container } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Header from './components/Navbar';
import Sections from './pages/Sections';
import ExamOne from './pages/Exams/ExamOne';
import Exams from './pages/Exams';
import Login from './pages/Login';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Header />
        <Container>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/sections" element={<Sections />}></Route>
            <Route exact path="/exams" element={<Exams />}></Route>
            <Route exact path="/exams/ExamOne" element={<ExamOne />}></Route>
          </Routes>
        </Container>
      </>
    </ApolloProvider>
  );
}

export default App;