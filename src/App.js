import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import PortfolioHeader from './components/PortfolioHeader';
import LandingPage from './content/LandingPage';
import ProjectsPage from './content/ProjectsPage';

class App extends Component {
  render() {
    return (
      <>
        <PortfolioHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/projects" component={ProjectsPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
