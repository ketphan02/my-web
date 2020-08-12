import React from 'react';
import '../css/App.css';
import '../css/Header.css';
import '../css/Font.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About';
import Home from './Home';
// import { useEffect } from 'react';

export default App;

function App() {


  return (
    <Router>

      <Switch>
        
        <Route path="/my-web/about">
          <About />
        </Route>
        <Route path="/my-web/">
          <Home />
        </Route>

      </Switch>

    </Router>
  );
}

/*

git add .
git commit -m 'commit'
git push origin master
npm run deploy

*/