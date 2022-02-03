import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router';
import { Container } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Header from './components/Navbar';
import Sections from './pages/Sections';

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
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/sections" element={<Sections />}></Route>
          </Routes>
        </Container>
      </>
    </ApolloProvider>
  );
}

export default App;
