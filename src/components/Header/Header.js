import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div  className='title'>
            <div className='exercise'>
                <h1><FontAwesomeIcon icon={faDumbbell} />Ultra Fitness Club</h1>
                <h2>Select today’s exercise</h2>
            </div>
            <div className='statusBar'>
                <h1>side bar</h1>
            </div>
        </div>
    );
};

export default Header;