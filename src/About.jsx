import React from 'react';
import './App.css';
import './Header.css';
import './Font.css';

export default About;

function About() {
  return (
    <div className="About">
      <header className="App-header">
          <content-area>
            <h2>
              <a href="/my-web/" className="title" > PHAN_KIET_BLOG </a>
            </h2>
            {/* <form action="https://google.com">
              <button className="title-button"> MAGIC BUTTON </button>
            </form> */}

          </content-area>

          <content-run>
              <run-txt>
                PhanKiet blog web
              </run-txt>
          </content-run>
      
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