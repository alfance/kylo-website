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

import { Auth0Provider } from '@auth0/auth0-react'

import './style.css'
import Navbar from './components/navbar'
import Portfolioproject3 from './views/portfolioproject3'
import Portfolio from './views/portfolio'
import Portfolioproject2 from './views/portfolioproject2'
import Portfolioproject1 from './views/portfolioproject1'
import NetflixLiveCapture from './views/netflix-live-capture'
import NetflixHighlights from './views/netflix-highlights'
import AiInitiatives from './views/ai-initiatives'
import AuthTest from './views/auth-test'
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
        <Navbar />
        <Switch>
          <Route component={Portfolioproject3} exact path="/portfolioproject3" />
          <Route component={Portfolio} exact path="/" />
          <Route component={Portfolioproject2} exact path="/portfolioproject2" />
          <Route component={Portfolioproject1} exact path="/portfolioproject1" />
          <Route
            component={NetflixLiveCapture}
            exact
            path="/netflix-live-capture"
          />
          <Route
            component={NetflixHighlights}
            exact
            path="/netflix-highlights"
          />
          <Route
            component={AiInitiatives}
            exact
            path="/ai-initiatives"
          />
          <Route component={AuthTest} exact path="/auth-test" />
          <Route component={NotFound} path="**" />
          <Redirect to="**" />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )
}

ReactDOM.render(
  <Auth0Provider
    domain="dev-ag40b3fzh0ynrhhy.us.auth0.com"
    clientId="bm2c40pQGP9ROnTb3jsghip4yYUpCfog"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('app')
)
