import raccoon from '../../../assets/images/raccoon.png';
import * as React from 'react';
import './Icon.scss'

const Icon = (props) => {
    return(
        <div className="IconContainer">
            <img src={raccoon} alt='Raccoon' />
        </div>
    )
}

export default Icon;