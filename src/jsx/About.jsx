import React from 'react';

import '../css/App.css';
import '../css/Header.css';
import '../css/Font.css';

import Header from './Header';

export default About;

function About() {
  return (
    <div className="About">
      <header className="App-header">
        <Header />
        
        <body-content>
          <intro>
            <h3> ABOUT ME </h3>
            <p> HI
            <br></br>
            Okay, here we go.
            </p>
          </intro>
        </body-content>
      </header>
      
    </div>
  );
}

/*

git add .
git commit -m 'commit'
git push origin master
npm run deploy

*/