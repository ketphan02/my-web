import React from 'react';
import '../css/App.css';
import '../css/Header.css';
import '../css/Font.css';

export default Header;

function Header() {
    return (
    <div>
        
        <content-area>
            <h1>
                <a href="/my-web/" className="title" > PHAN_KIET_BLOG </a>
            </h1>

        </content-area>

        <content-run>
            <run-txt>
                PhanKiet blog web
            </run-txt>
        </content-run>
    </div>
    );
}