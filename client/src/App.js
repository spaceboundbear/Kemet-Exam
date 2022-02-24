import React from 'react';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Navbar';
import Sections from './pages/Sections';
import Exams from './pages/Exams';
import Login from './pages/Login';
import SignupForm from './pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExamQuestions from './pages/Questions';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={SignupForm}></Route>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/sections" component={Sections}></Route>
              <Route exact path="/exams" component={Exams}></Route>
              <Route
                exact
                path="/exams/ExamOne"
                component={ExamQuestions}
              ></Route>
            </Switch>
          </Container>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
