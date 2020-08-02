import React from 'react';
import './App.css';
import './Header.css';
import './Font.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';


export default App;

function App() {
  return (
    <Router>
      {/* <div className="App">
        <header className="App-header">
            <content-area>
              <h2>
                <a href="/my-web/" className="title" > PHAN_KIET_BLOG </a>
              </h2>
              <form action="https://google.com">
                <button className="title-button"> MAGIC BUTTON </button>
              </form>

            </content-area>

            <content-run>
                <run-txt>
                  PhanKiet blog web
                </run-txt>
            </content-run>
        
        <body-content>
          <intro>
            <h3> HELLO, IT'S PHAN KIET </h3>
            <p>This is my website which allows me to post my projects, my experience about coding, ML, DL, gym, stuff, etc. Want to know more ? "Almost everything" about me is in <a href="/my-web/about"> HERE</a>.
            <br></br>
            Okay, here we go.
            </p>
          </intro>
        </body-content>
        
        </header>
      </div> */}

      <Switch>
        
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
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