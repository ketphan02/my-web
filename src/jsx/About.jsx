import React, { useEffect } from 'react';

import '../css/App.css';
import '../css/Header.css';
import '../css/Font.css';
import '../css/About.css';

import Header from './Header';
import { useRef } from 'react';
import useDimension from '../js/useDimension';

export default About;

function About() {

  // const line_len = document.getElementsByClassName("okay");

  const lineRef = useRef(null);
  let { height, width } = useDimension(lineRef);

  const boxRef = useRef(null);
  let { h, w } = useDimension(lineRef);


  return (
    <div className="About">
      <header className="App-header">
        <Header />
        
        <body-content>
          
          <div className="intro-about">
            <intro-about>
              <div className="line" ></div>
              <div className="okay" >
                <h1 className="about-start"> ABOUT ME </h1>
                <p>
                  My name is PhanKiet.
                  {/* height = {h}; */}
                </p>
              </div>
            </intro-about>
          </div>
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