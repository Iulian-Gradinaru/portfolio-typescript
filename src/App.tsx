import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Projects } from './components/Projects/Projects';

export const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/projects" render={Projects} />
        </Switch>
      </div>
    </Router>
  );
};
