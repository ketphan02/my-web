import React from 'react';
import './App.css';
import './Header.css';
import './Font.css';

export default Home;

function Home() {
  return (
    <div className="App">
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
    </div>
  );
}

/*

git add .
git commit -m 'commit'
git push origin master
npm run deploy

*/