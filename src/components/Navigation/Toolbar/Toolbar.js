import React from 'react';

import Logo from '../../Logo/Logo'
import './Toolbar.css'

const toolbar = (props) => (
    <div className='Toolbar'>
        <div>Main</div>
        <Logo/>
        <nav>
            ...
        </nav>
    </div>        
);

export default toolbar