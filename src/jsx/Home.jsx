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