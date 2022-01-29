import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sections from './pages/Sections';
import Exams from './pages/Exams';

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
      <Router>
        <>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/sections" component={Sections}></Route>
              <Route exact path="/exams" component={Exams}></Route>
            </Switch>
          </Container>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
