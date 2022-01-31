import React from 'react';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Sections from './pages/Sections';
import Exams from './pages/Exams';
import Home from './pages/Home';
import { Routes, Route } from 'react-router';

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
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/sections" component={Sections}></Route>
            <Route exact path="/exams" component={Exams}></Route>
          </Routes>
        </Container>
      </>
    </ApolloProvider>
  );
}

export default App;
