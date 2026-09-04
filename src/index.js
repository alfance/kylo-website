import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom'

import './style.css'
import Portfolioproject3 from './views/portfolioproject3'
import PortfolioAboutpage from './views/portfolio-aboutpage'
import Portfolio from './views/portfolio'
import Portfolioproject2 from './views/portfolioproject2'
import Portfolioproject1 from './views/portfolioproject1'
import NetflixLiveCapture from './views/netflix-live-capture'
import NotFound from './views/not-found'



const App = () => {
  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>;
  };
  return (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route component={Portfolioproject3} exact path="/portfolioproject3" />
          <Route
            component={PortfolioAboutpage}
            exact
            path="/portfolio-aboutpage"
          />
          <Route component={Portfolio} exact path="/" />
          <Route component={Portfolioproject2} exact path="/portfolioproject2" />
          <Route component={Portfolioproject1} exact path="/portfolioproject1" />
          <Route
            component={NetflixLiveCapture}
            exact
            path="/netflix-live-capture"
          />
          <Route component={NotFound} path="**" />
          <Redirect to="**" />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
