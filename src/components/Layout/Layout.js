import React from 'react'
import './Layout.css'
import Auxi from '../../hoc/Auxi'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Auxi>
        <Toolbar/>
        <main className='Content'>
            {props.children}
        </main>
    </Auxi>
);

export default layout;