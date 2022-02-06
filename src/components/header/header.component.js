import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = () => {
    return ( 
        <div className="headerContainer">
            <Link to="/">
            <h1 className="text-5xl font-bold my-8">Quizeo</h1>
            </Link>
        </div>
     );
}

export default Header;