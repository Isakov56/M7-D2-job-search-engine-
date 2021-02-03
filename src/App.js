import React, { Component } from "react";
import './App.css';
import SearchPage from './components/SearchPage'
import DetailsPage from './components/DetailsPage'
import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom'

class App extends Component {

  state={
    selectedJob: null
  }

  myHandler = (dataFromSearchPage) => {
    this.setState({selectedJob: dataFromSearchPage})
  }


    render() {
      return (
        <Container>
          
          <Route path='/' exact render={() => (
            <SearchPage selectedJob={this.myHandler}/>
          )} />
          <Route path='/details' exact render={() => (
            <DetailsPage selectedJobId={this.state.selectedJobId}/>
          )} />
        </Container>
      );

    }
}

export default App;
