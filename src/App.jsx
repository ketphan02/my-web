import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Header.css';
import './Font.css';

export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <content-area>
            <h2 className="title">
              <a href="/my-web/"> PHAN_KIET_BLOG </a>
            </h2>
            <form action="https://google.com">
              <button className="title-button"> MAGIC BUTTON </button>
            </form>

          </content-area>

          <content-run>
              <a href="https://google.com">
                <run-txt> 
                  PHANKIET blog. Let's see what will be put in.
                </run-txt>
              </a>
          </content-run>

      </header>


      <bd>


        <h1>  href="https://google.com"> HELLO, IT'S PHAN KIET </h1>


      </bd>
    </div>
  );
}

/*

git add .
git commit -m 'commit'
git push origin master
npm run deploy

*/