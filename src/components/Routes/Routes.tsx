import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Imports components
 */
import { NavBar } from '../NavBar';
import { Home } from '../Home';
import { Portofolio } from '../Portofolio';
import { Footer } from '../Footer';
import { ScrollToTop } from '../ScrollToTop';

/**
 * Displays the component
 */
export const Routes: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <NavBar />
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/projects" render={Portofolio} />
          <Route path="*" render={Home} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};
