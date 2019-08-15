import React, {Component, Fragment} from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Import css
import './Css/header.css';
import './Css/login.css';

//Import components
import Login from './Components/Login'
import Header from './Components/header'
import Dashboard from './Components/Dashboard'
import Create from './Components/create'
import Edit from './Components/edit'
import Footer from './Components/footer'


const client= new ApolloClient({
  uri: "https://web-compilator.herokuapp.com/graphql",
  onError: ({networkError, graphQLErrors})=>{
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});
function App() {
  return (
    <ApolloProvider client= {client}>
      <Router>
        <Fragment>
          <Header />
          <div className= "container-login">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/edit/:id" component={Edit} />

            </Switch>
          </div>
          <Footer/>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
