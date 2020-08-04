import React from 'react';
import '../css/App.css';
import '../css/Header.css';
import '../css/Font.css';

import Header from './Header';

export default Home;

function Home() {
  return (
    <div className="App">
        
        <header className="App-header">
            <Header />
            <div className="content-container">
                <body-content>
                    <intro>
                        <h2> HELLO, IT'S PHAN KIET </h2>
                        <p>This is my website which allows me to post my projects, my experience about coding, ML, DL, gym, stuff, etc. 
                        <br></br>
                        Okay, here we go.
                        </p>
                    </intro>
                </body-content>

                <contents>
                    <a className="content-box" href="/my-web/about">
                        <h2 className="box-title" > ABOUT ME </h2>
                    </a>
                    <a className="content-box" href="/my-web/projects">
                        <h2 className="box-title"> PROJECTS </h2>
                    </a>
                    <a className="content-box" href="/my-web/blogs">
                        <h2 className="box-title"> MY BLOG </h2>
                    </a>
                </contents>
            </div>
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