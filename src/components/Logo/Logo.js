import React from 'react';

import './Logo.css'
import burgerLogo from '../../assets/images/original.png'

const logo = (props) => (
    <div className='Logo'>
        <img src={burgerLogo} alt="burger"/>
    </div>        
);

export default logo